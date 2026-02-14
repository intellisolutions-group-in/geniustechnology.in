# Careers & Contact Pages Test Report

**Date:** February 14, 2025  
**Status:** ✅ All 20 automated tests passed  
**Test Suite:** `tests/careers-contact.spec.ts`

---

## Pages Tested

| Page | URL | Status |
|------|-----|--------|
| Careers | http://localhost:3000/careers | ✅ Pass |
| Contact | http://localhost:3000/contact | ✅ Pass |

---

## 1. Careers Page (/careers)

### Buttons & Links Tested

| Element | Type | Expected Action | Result |
|---------|------|-----------------|--------|
| **Get Started** (PageHero) | Link | Navigate to /contact | ✅ Pass |
| **Our Portfolio** (PageHero) | Link | Navigate to /portfolio | ✅ Pass |
| **Job card** (click title) | Clickable | Expand to show responsibilities | ✅ Pass |
| **Apply Now** | Button | Open application modal | ✅ Pass |
| **Modal close (X)** | Button | Close modal | ✅ Pass |
| **Submit Application** | Button | Submit form, show success | ✅ Pass |

### Career Application Form

| Field | Required | Test Result |
|-------|----------|-------------|
| Full Name | Yes | ✅ Fills correctly |
| Email | Yes | ✅ Fills correctly |
| Phone | Yes | ✅ Fills correctly |
| Current Location | Yes | ✅ Fills correctly |
| Resume (PDF/DOC) | Yes | ✅ File upload works |
| Cover Letter | No | — |
| Submit Application | — | ✅ Shows success modal |

### Form Submission Flow

1. Fill all required fields + upload resume
2. Click "Submit Application"
3. Loading spinner displays
4. Success modal appears: "Thank you! Our team will review your application and reach you soon."
5. Form resets, modal closes

**Note:** The career form posts to `https://geniustechnology.in/api/career-application`. Errors are intentionally ignored per spec. In production, ensure this API endpoint exists and handles submissions.

---

## 2. Contact Page (/contact)

### Buttons & Links Tested

| Element | Type | Expected Action | Result |
|---------|------|-----------------|--------|
| **Get Started** (PageHero) | Link | Navigate to /contact | ✅ Pass |
| **Our Portfolio** (PageHero) | Link | Navigate to /portfolio | ✅ Pass |
| **Explore Our Services** | Link | Navigate to /services | ✅ Pass |
| **Send Message** | Button | Submit form, show success | ✅ Pass |
| **ThankYouModal close** | Button | Close success modal | ✅ Pass |
| **Facebook** | Link | External, target="_blank" | ✅ Pass |
| **Instagram** | Link | External, target="_blank" | ✅ Pass |

### Contact Form

| Field | Required | Test Result |
|-------|----------|-------------|
| Full Name | No (no validation) | ✅ Fills correctly |
| Email Address | No | ✅ Fills correctly |
| Company | Optional | ✅ Fills correctly |
| Message | No | ✅ Fills correctly |
| Send Message | — | ✅ Shows success modal |

### Form Submission Flow

1. Fill form fields (Full Name, Email, Message)
2. Click "Send Message"
3. Loading spinner displays (~1 second)
4. Success modal appears: "Thank you! We will reach you soon."
5. Form resets
6. Modal can be closed manually or auto-closes after 3 seconds

**Note:** The contact form does not send data to a backend—it simulates success with a 1-second delay. Consider integrating with an API or email service for production.

---

## 3. Navigation

| Test | Result |
|------|--------|
| Header Home link (from careers) | ✅ Pass |
| Header Contact link (from contact) | ✅ Pass |

---

## 4. Console Errors

| Page | Result |
|------|--------|
| /careers | ✅ No critical console errors |
| /contact | ✅ No critical console errors |

---

## Summary

### ✅ All Functionality Working

- **0 broken buttons** identified
- **Career form submission** works end-to-end (with test PDF upload)
- **Contact form submission** works (client-side simulation)
- All navigation links resolve correctly
- Modals open/close as expected

### Screenshots

Saved in `geniustechnology.in/test-results/careers-contact/`:
- `01-careers.png` — Careers page
- `07-careers-success.png` — Career form success modal
- `09-contact.png` — Contact page
- `13-contact-success.png` — Contact form success modal

### Run Tests

```bash
cd geniustechnology.in
npx playwright test tests/careers-contact.spec.ts
```
