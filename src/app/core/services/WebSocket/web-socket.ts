import { Injectable, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject, retry, takeUntil } from 'rxjs';
import { WebSocketMessage } from '../../types/webSocket';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocket implements OnDestroy {
  private socket?: WebSocketSubject<WebSocketMessage>;
  private destroy$ = new Subject<void>();

  private readonly url = `${environment.uri}ws`;

  connect(): void {
    if (this.socket && !this.socket.closed) return;

    this.socket = webSocket<WebSocketMessage>({
      url: this.url,
      openObserver: { next: () => console.log('WS connected') },
      closeObserver: { next: () => console.log('WS disconnected') }
    });

    this.socket.pipe(
      retry({ delay: 2000 }),
      takeUntil(this.destroy$)
    ).subscribe({
      error: err => console.error('WS error', err)
    });
  }

  send(msg: WebSocketMessage): void {
    if (!this.socket || this.socket.closed) {
      console.warn('WS not connected');
      return;
    }
    this.socket.next(msg);
  }

  messages(): Observable<WebSocketMessage> {
    if (!this.socket) throw new Error('WS not connected');
    return this.socket.asObservable();
  }

  close(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.socket?.complete();
  }

  ngOnDestroy(): void {
    this.close();
  }
}
