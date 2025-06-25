# 🏨 Lodgify - Hotel Room Booking Application

Lodgify is a full-featured hotel room booking platform built with React. It allows users to browse available rooms, book their desired stay, post reviews, and manage bookings with real-time updates. Built with a modern tech stack and clean user experience in mind.

---

## 🌐 Live Demo

🔗https://assignment-11-1acf0.web.app

---

## 🎯 Purpose

The goal of this project is to build a user-friendly and responsive hotel room booking system where users can:

- Explore rooms with filters
- Book rooms based on availability
- Post reviews and ratings
- Cancel or modify bookings
- Provide a platform for users to browse and book rooms
- Allow users to leave, edit, and view reviews with ratings
- Enable users to manage their bookings and update booking details
- Show room locations using an interactive map
- Deliver a clean and smooth user experience with animations and helpful UI elements

---

## ✨ Key Features

- 🔐 Firebase Authentication (Login/Signup)
- 📅 Date range selection with day count calculation
- 🏨 Room details page with booking modal
- 📦 Bookings management (Cancel / Update Dates / Review)
- 💬 Tooltip & confirmation modals
- 🌍 Interactive map integration (Leaflet)
- 🔄 Responsive design with Tailwind CSS
- 🔥 Toasts and alerts for feedback
- 🧠 Smart UI components with conditional rendering
- 🌙 Dark Mode ready for use

## 📦 NPM Packages Used

- **Tailwind CSS** – Utility-first CSS framework for fast and responsive UI design
- **DaisyUI** – Tailwind CSS component library for styled UI elements
- **Axios** – Promise-based HTTP client for making API requests
- **Firebase** – Backend service for authentication, database, and hosting
- **React Date Range** – Component for selecting a date range with calendar UI
- **React Leaflet** – React components for interactive maps using Leaflet.js
- **React Icons** – Popular icon packs as React components
- **React Spinners** – A collection of loading spinner components for React
- **React Star Ratings** – Component for displaying and submitting star-based ratings
- **React Tooltip** – Tooltips for UI elements in React apps
- **SweetAlert2** – Beautiful and customizable alert modals
- **Swiper** – Modern touch slider/carousel for displaying content like reviews
- **Motion** – Animation library for React powered by Framer Motion
- **React Awesome Reveal** – Animation library based on Framer Motion to reveal elements on scroll with elegant effects
- **React CountUp** – An smooth counting animation library in react

## 🚀 Run Locally

You need to clone the server repository.
```bash
https://github.com/tmdsifat98/hotel-management-server
```
Environment variables
```bash
DB_USER=hotel-manager
DB_PASS=k5OfmtcwueriH5vN
FB_SERVICE_KEY=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiYXNzaWdubWVudC0xMS0xYWNmMCIsCiAgInByaXZhdGVfa2V5X2lkIjogImQ
2MjZkM2ZmNjQzMTY0ZDVhYmY3NjFjNzdkNzllODYxMWU2MzI2Y2QiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSU
V2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRQzYzWmdEcU1TQmI5VTZcbkszM01NTG9idFdIa01vczVBZkY2N2dmdHA5b2FDc
FlJQ0IrOEJENklVOXB1TXloL1NRTGtsSGRiMTcxS0lKRjdcbjRRN1FOVmlTVkk2MXl5K0I2NmFTQ1Q3cWFINDhXMGZHL3NZMVhRcDN2SkFNRjdXcXpkeFozS1lW
alNXMTJBQjBcbmYyNm81bVllcXowY1BpcEoyRUxTTzFmd0FPTk5ZeWlSN2hOMTlUaURaczNRdnI5dHRjZ1RUSG00MXZBM2FGamNcbkovQXZOeUxpK3ZWSk1BOE5
KSVFRdko4QytEL0xjdzZOTG9Hb2R6MGhOY0ZDakF0OTJYZTVibGJRbHNPVURoZUxcbkNJSjFsZTJMYk00OGs1OWNMQ3h0bE5uR3hOV2lja25YZWtRcVhXZXdMSW
FXY2luYTZ5WUtlWHdCalRQNzVXbUdcblF0SHNWOEN4QWdNQkFBRUNnZ0VBQk1HSEVQREdyNVN0RktIdXZiZXZ4T3pFNVEzMFJTc3Jmamw0c2kvSGVVb3pcbnIxa
WxsaDkxaC9xNllIdWsyRGgvZmxuWS85bHAwKzBvUnNMZm9hVDU4QjkrMGxtdGg5ejdqRlAzNmZkbTN4cGpcbnBVanV1b1Qzc3p4MVhobHNZa0NERHpaeWM3SDM5
N3picGh0b01aeExsUlErcGUxZkhpb0c2VnJoVGhaM3NveDhcblhDekwvQUNWV0djN00xVVM4VSs5VmxBTlh5VkZrWERLS3BocnBzUktzMy83cWMyY0NSVi9YQXB
2bkprVXhzKy9cbkthNEVQWmFwa0VVUnZzWW5XUldnNFBlVU8rOS90VEFPcXQrVGlzMnpXTTljUXlwT1pXdjhKeGVQbHF4NHlqS1Jcblc5L0Q1empvTW9ZSnNpZm
ZYbFJWR2NwaW1xTkZXZ0hoNWNKVlAzbTcwUUtCZ1FEdFZCSENYRHgydTg4S0xlNkdcbmFMVnZzNzlxQjQ1ZElvS2Y1VDlabXB6N1NXV1g5T3hlMlVJa05tK3lDW
URaY3NHcHB5NGVSdzByZEZ6QkpGT1ZcbkloaUNsM2dqbmtZN0FpejBTN1NNRWx3YnpMR0tBamF5VVJYVlJJUG9BZi8zR3dRMndNYm8vZ3ZtbWlBTWE0eXZcbkVI
dXdhbkhsUUg2b1VUL29zRnZRSmJFVlF3S0JnUURKa1N5MjR2OG1UeTJlYUhNc1lBL21mREVGL2pyMWdUS0ZcbmZaSkx6dTZtR04xU0FURDlKRTBnWWxBTWJwM2R
kaFNMV3hPOUVtTnlPUWRaS0t3cVdjTWNvMjBkSzVwQjNXMGhcbmtkeCtUMlBaVnkzbkk5NDRtSWptVjhSb2hpUWJncDRIRExTZVBweDlmWFRPMjNZZzBuWk15QU
03SCt6SVAxUjdcblhZcDFodlg0K3dLQmdRREZSOU1UYTdUZlJqTk8xT3VvVXpZdlNvM2RSN2F4K05QNHNvbzhvK2ZHZ3phdVlHeDBcblU4bEZiUExnWGtIN2dBY
zRUYjVxY01tank3Q201Tm1ONksvVExySXhlWW9MMXowalBpTXhKTG5vYWZsVExZL21cbkhyMDFjU1R0SVd4ekxzUUw5NmZoV2Z6dWprUUJ6dzA5SVVpUVY0dWg5
RURWRGVWQU9nbTROdnpESFFLQmdRREZcbjUyMzVtdUpkWUx3dm5lb0hGY0pHMElUcGwzV1grbVA2UVJKVXNEWU1pcmt5Zk16Mm5wL0RQZ1BPVVFWYW5VY0tcbmx
EL0xFYlRtUHl3QjFEZEYxYUFHREVkanJwM2tNVjJtNmltTk1yR2NnVVltZlVjQVZuT0RoWVRvQTF5TVRqQ09cblIyRkhSYjRzVC9OUjdwUUxJZGpaQmtCMTJxQ0
c4L2Nrc1BEeTk3R2w1UUtCZ1FEWk9rZGR2cGRIb2J3THN4SXhcblFPM0oxR2RSNDIrbHc1eGFCdGc1eW5peVdCUWlBSnZtL2RkVGdvRjlEYlEvYkplYjBDSndpe
nViTDd4SCtmZFRcbjF3ZFNDYTVROHI3N3BQSitGazlzVFlleWpXaGlvVEpxOEtLR3dpdUZCUG1ZQnBrWjJNbmFMejhOVGZ6WGgwVlFcbktnbjlVa0kxdmxFYmtw
VGdvVVMzc05ZN3F3PT1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0Bhc3N
pZ25tZW50LTExLTFhY2YwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjExNjk1Mjk3MzM3NjUwMjM0NDkzMCIsCiAgImF1dGhfdX
JpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY
29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAg
ImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGs
tZmJzdmMlNDBhc3NpZ25tZW50LTExLTFhY2YwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIg
p9Cg==
```
Go to the directory and run it
```bash
nodemone start
```
Here is the local server url
```bash
http://localhost:3000
```
And production url is here
```bash
https://assignment-11-server-beige-seven.vercel.app
```
