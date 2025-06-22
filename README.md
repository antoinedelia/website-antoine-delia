# Freelance Portfolio Website

This repository contains the source code for my personal freelance portfolio website. It's a modern, single-page application designed to showcase my services, work process, and technical articles related to AWS and DevOps.

The live version can be found at: **[antoinedelia.fr](https://antoinedelia.fr)**

## ✨ Features

* **Bilingual Content:** Supports both French and English, with a simple toggle.
* **Dynamic Blog Section:** Automatically fetches and displays the latest articles from my personal blog's RSS feed.
* **Animated UI:** Includes smooth, scroll-based animations for a modern user experience.
* **Functional Contact Form:** Integrated with a Google Apps Script backend to forward messages directly to my email.
* **Fully Automated Deployment:** CI/CD pipeline using GitHub Actions to deploy the infrastructure and website to AWS.

## 🛠️ Tech Stack

This project is built with a modern, robust, and scalable tech stack:

* **Front-End:**
    * [**React**](https://react.dev/) (with [Vite](https://vitejs.dev/)) for building the user interface.
    * [**Tailwind CSS**](https://tailwindcss.com/) for utility-first styling.
* **Infrastructure & Deployment (CI/CD):**
    * [**AWS (Amazon Web Services)**](https://aws.amazon.com/):
        * **S3:** For static website hosting.
        * **CloudFront:** As a CDN for global content delivery, HTTPS, and custom domain support.
        * **IAM:** For secure access management using OIDC.
    * [**Terraform**](https://www.terraform.io/): For defining and managing the AWS infrastructure as code.
    * [**GitHub Actions**](https://github.com/features/actions): For automating the build and deployment process.
* **Backend (Contact Form):**
    * [**Google Apps Script**](https://developers.google.com/apps-script): As a serverless backend to process form submissions and send emails.

## 📂 Project Structure

The repository is organized into three main parts:
```
.
├── .github/workflows/      # Contains the GitHub Actions CI/CD pipeline
├── terraform/              # All Terraform files for defining the AWS infrastructure
└── web/                    # The React application source code
```

## 🚀 Local Development

To run the website on your local machine, follow these steps.

### Prerequisites

* [Node.js](https://nodejs.org/) (v20 or later)
* [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/antoinedelia/website-antoine-delia.git](https://github.com/antoinedelia/website-antoine-delia.git)
    cd website-antoine-delia
    ```

2.  **Navigate to the web directory:**
    ```bash
    cd web
    ```

3.  **Install dependencies:**
    This command installs all the necessary packages for the React application.
    ```bash
    npm install
    ```

4.  **Run the development server:**
    This will start the Vite development server and open the website in your browser, typically at `http://localhost:5173`. The site will auto-reload when you make changes to the code.
    ```bash
    npm run dev
    ```

## ☁️ Deployment

This project is configured for fully automated deployments to AWS S3 and CloudFront using the GitHub Actions workflow defined in `.github/workflows/main.yml`.

### How It Works

The workflow consists of two main jobs that run sequentially:

1.  **`deploy-infra`**: This job runs Terraform to create or update the AWS infrastructure (S3 bucket, CloudFront distribution, etc.). It then outputs the S3 bucket name and CloudFront distribution ID.
2.  **`build-and-deploy-website`**: This job waits for the infrastructure to be ready. It then builds the React application and syncs the static files to the S3 bucket provisioned by Terraform. Finally, it creates a CloudFront invalidation to ensure users see the latest version of the site immediately.

### Setup for Deployment

For the workflow to run successfully, you need to configure the following secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

* **`AWS_ROLE_ARN`**: The ARN of the IAM role that GitHub Actions will assume to get access to your AWS account via OIDC.
* **`TF_API_TOKEN`** (Optional): Your API token for Terraform Cloud, if you are using it for remote state management.

Once these secrets are in place, any push to the `main` branch will automatically trigger a new deployment.
