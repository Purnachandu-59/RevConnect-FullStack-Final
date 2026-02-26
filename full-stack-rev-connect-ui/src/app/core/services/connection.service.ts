import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* ===========================
   🔹 Raw Connection Entity
=========================== */
export interface Connection {
  id: number;
  senderId: number;
  receiverId: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}

/* ===========================
   🔹 Pending Request DTO
=========================== */
export interface PendingRequest {
  connectionId: number;
  senderId: number;
  senderUsername: string;
  senderProfileImage: string;
}

/* ===========================
   🔹 Connected User DTO
=========================== */
export interface ConnectionUser {
  userId: number;
  username: string;
  bio: string;
  profileImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private baseUrl = 'http://localhost:8080/api/connections';

  constructor(private http: HttpClient) {}

  /* 🔹 Send Request */
  sendRequest(receiverId: number): Observable<Connection> {
    return this.http.post<Connection>(
      `${this.baseUrl}/request/${receiverId}`, {}
    );
  }

  /* 🔹 Accept Request */
  acceptRequest(connectionId: number): Observable<Connection> {
    return this.http.put<Connection>(
      `${this.baseUrl}/accept/${connectionId}`, {}
    );
  }

  /* 🔹 Reject Request */
  rejectRequest(connectionId: number): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/reject/${connectionId}`, {}
    );
  }

  /* 🔹 Get Pending Requests */
  getPending(): Observable<PendingRequest[]> {
    return this.http.get<PendingRequest[]>(
      `${this.baseUrl}/pending`
    );
  }

  /* 🔹 Get Connected Users */
  getMyConnections(): Observable<ConnectionUser[]> {
    return this.http.get<ConnectionUser[]>(
      `${this.baseUrl}/my`
    );
  }

  getSentRequests(): Observable<number[]> {
  return this.http.get<number[]>(
    `${this.baseUrl}/sent`
  );
}

getConnectionsByUser(userId: number) {
  return this.http.get<ConnectionUser[]>(`${this.baseUrl}/user/${userId}`);
}
}