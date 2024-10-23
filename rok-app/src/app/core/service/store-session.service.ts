import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreSessionService {
  constructor() {}

  saveSessionItemRole(role: string): void {
    try {
      const roleObject = JSON.parse(role);
      role = roleObject.role;
      sessionStorage.setItem('userRole', role);
    } catch {}
  }

  getSessionItemRole(): string {
    try {
      const userRole = sessionStorage.getItem('userRole');
      if (userRole != null){
        return userRole;
      }else{
        return "error";
      }
      
    } catch {
      return "error"
    }
  }

  deleteSessionItemRole(): void{
    try {
      sessionStorage.removeItem('userRole');
    }catch{
      console.error("error");
    }
  }
}
