# TravelR - Travel Request Management App for ServiceNow

This is a scoped application for managing travel requests in ServiceNow.

## Features

- Create and submit travel requests
- Approval workflow for managers
- Track travel details including destination, dates, and estimated cost
- Status tracking (Draft, Submitted, Approved, Rejected)

## Installation

1. Open ServiceNow Studio in your PDI or instance.
2. Import the application from the repository or upload the files.
3. Publish the application.

## Development

Use VS Code with the ServiceNow extension to develop and deploy changes.

- Connect to your ServiceNow instance via the extension.
- Sync files to push changes.

## Tables

- **u_travel_request**: Main table for travel requests, extending Task.

## Scripts

- **travel_request_approval_br.js**: Business rule to create approval when status changes to submitted.

## Usage

Users can create travel requests via the form, submit for approval, and managers can approve or reject.