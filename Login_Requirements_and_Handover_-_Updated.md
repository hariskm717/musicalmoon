# Handover & Login Requirements Document

**[MusicalMoon / Login Restyling] — Login Page + Team Page**

---

## 1. Feature Overview

This feature is a restyled login page that leads into a team page containing the team's name, and each member's:

- Photo
- Name
- Role
- Short blurb

---

## 2. Scope

### 2.1 In scope

- Restyle the existing login page — colours, spacing, typography, layout, responsive behaviour
- The existing email/password areas can be seen and work
- Build a new team page that displays the team's name and member cards (photo, name, role and short blurb)
- The login page should direct the user to the team page
- Handle missing images and long text without breaking layout

### 2.2 Out of scope

- Any change to the authentication or Firebase authentication provider calls
- The page redirects the user after a failed login
- Adding, removing or renaming login fields (email/password)
- Password reset, sign-up, "remember me", or account recovery flows
- Changes to the existing database, identity provider or back-end services
- Admin screens or in-UI editing of team members
- Additional pages or features beyond login and team page

---

## 3. Login Page Requirements (styling only)

### 3.1 What can change

- Colours, background, borders, shadows
- Typography — font sizes, weights, heading/label styles
- Spacing, alignment, overall layout
- Button and input field appearance, incl. hover / focus / disabled states
- Visual treatment of error and loading messages — not their wording or when they appear
- Responsive behaviour across mobile, tablet, desktop

### 3.2 What must not change

- Existing authentication logic / authentication provider calls
- Session behaviour
- Where the user is sent after login success or failure
- Form field names, IDs, and submission order
- Client-side validation rules and the conditions that trigger each error
- The number of form fields on the page

---

## 4. Team Page Content Fields

> *List page heading rules here — e.g. team name as main heading, max character length, optional subheading.*

| Field | Requirement | Validation Rule | Display Rule |
|---|---|---|---|
| Team name | Required | Plain text, max 30 characters | Shown as main heading, wraps on small screens |
| Member photo | Required | JPG/PNG/WebP, min 200x200px | Displayed consistently per member, cropped/shape rule |
| Member name | Required | 2–40 characters. Letters/spaces/hyphens/apostrophes only | Shown under photo, wrap/truncate rule |
| Member role | Required | 2–30 characters. Must be the correct designated role | Shown under name, single line |
| Short blurb | Required | Plain text, max 150 characters | Shown under role, wrap/truncate rule |

---

## 5. Edge Cases

### 5.1 Login page

| Scenario | Expected Behaviour |
|---|---|
| Invalid login | Existing authentication failure behaviour is unchanged — styling is the only change |
| Empty required field on submit | Existing validation message shown, styled to match new design |

### 5.2 Team page

| Scenario | Expected Behaviour |
|---|---|
| Missing or broken member photo | Show placeholder or initials avatar; member details must remain visible |
| Long member name | Wrap to a second line. If still too long, truncate with ellipsis |
| Long member role | Keep to one line, or truncate with ellipsis — don't shrink the text |
| Blurb longer than limit | Truncate with ellipsis; card height stays the same |
| Blank required field | Do not publish the incomplete entry until all required fields are filled |
| Small mobile screen | Stack content clearly; keep fields/buttons usable |

---

## 7. Team Member Roles

| Role | Date |
|---|---|
| PM – Ahmed Salih | 5th August, 2026 |
| BA – Gaurav Shiven Sursen | 5th August, 2026 |
| UX – Richard Formosa | 5th August, 2026 |
| Dev – Haris Mughal | 5th August, 2026 |
| Dev – Stephen Oberoi | 5th August, 2026 |

### Summary of work this stage

Applied the approved visual design to the existing login page. Login leads to a team page with all the requirements. No authentication, validation or session logic was changed.

### Handoff Notes

**Done:** Documented required fields for the team page (team name, each member's photo, name, role and short blurb), and confirmed that login behaviour is styling-only, no authentication logic changes.

**Deliverable:** Login Requirements document, committed to the team repo.

**Note for next role:** If a team member doesn't have a headshot yet, implement a design that has placeholder-avatar there instead.

---

## Addendum — Section 8: BA Design Review

## 8. BA Design Review

| Role | Date |
|---|---|
| BA – Gaurav Shiven Sursen | 13th August, 2026 |

### Summary of work this stage

Reviewed the UX mockups against the Login Requirements document. Confirmed that the login page mockup doesn't change the scope and the design has been approved for development.

### Review details

- Every required field checked against the design: all team page fields (name, photo, role, blurb) and login fields present
- Login scope confirmed unchanged: login mockup changes styling only; no fields added/removed, no authentication or redirect changes
- No gaps identified
- Design formally approved: **Yes**

### Handoff Notes

**Done:** Reviewed UX mockups against requirements; confirmed login scope unchanged; all fields are present, placeholder avatar covered. Approved as-is.

**Deliverable:** Design validated. Committed to repo.

**Note for next role:** Dev — you're all good to go.
