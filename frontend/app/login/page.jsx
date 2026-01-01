'use client'

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrors({});
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    // Just a frontend page - no actual authentication
    setTimeout(() => {
      alert("This is a frontend-only page. No authentication is performed.");
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg p-4"
        style={{ width: "28rem", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4 text-primary fw-bold">
          Login Account
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
            {errors.email && (
              <div className="invalid-feedback d-block">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
            {errors.password && (
              <div className="invalid-feedback d-block">{errors.password}</div>
            )}
          </div>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary w-100 fw-semibold"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-muted mt-3 mb-0">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-decoration-none text-primary fw-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
