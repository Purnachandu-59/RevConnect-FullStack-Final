  import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { Router, ActivatedRoute, RouterModule } from '@angular/router';
  import { AuthService } from '../../../core/services/auth.services';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
    templateUrl: './login.html',
    styleUrls: ['./login.css']
  })
  export class Login implements OnInit {

    // ================= FIELDS =================
    email = '';
    username = '';
    password = '';
    // role: string | null = null;
role: string = '';
    securityQuestion = '';
    securityAnswer = '';

    // ================= UI STATE =================
    isRegisterMode = false;
    successMessage = '';
    errorMessage = '';

    constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
    private cdr: ChangeDetectorRef   
    ) {}

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['reset'] === 'success') {
          this.successMessage = "Password updated successfully. Please login.";
        }
      });
    }

    // ================= TOGGLE =================
    toggleMode() {
      this.isRegisterMode = !this.isRegisterMode;

      this.email = '';
      this.username = '';
      this.password = '';
      // this.role = null;
      this.role = '';
      this.securityQuestion = '';
      this.securityAnswer = '';
      this.successMessage = '';
      this.errorMessage = '';
    }

    // ================= REGISTER =================
    register() {

      if (!this.email || !this.username || !this.password ||
          !this.securityQuestion || !this.securityAnswer) {

        this.errorMessage = "All fields are required.";
        return;
      }

      this.errorMessage = '';
      this.successMessage = '';

      const payload: any = {
        email: this.email,
        username: this.username,
        password: this.password,
        securityQuestion: this.securityQuestion,
        securityAnswer: this.securityAnswer
      };

      if (this.role) {
        payload.role = this.role;
      }

      this.authService.register(payload).subscribe({
        next: () => {
          this.toggleMode();
          this.successMessage = "Registration successful. Please login.";
        },
        error: (err) => {
          this.errorMessage =
            err?.error?.message || "Registration failed.";
        }
      });
    }

    // ================= LOGIN =================
  login() {

    if (!this.username || !this.password) {
      this.errorMessage = "Username and Password required.";
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({

      next: (res: any) => {

        // Successful login
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('loggedUser', this.username);

        this.router.navigate(['/dashboard']);
      },

    error: (err) => {

    console.log("Login error:", err);

    this.errorMessage =
      err?.error?.message || "Invalid username or password.";

    this.cdr.detectChanges();   // 🔥 FORCE UI UPDATE
  }
    });
  }
  }