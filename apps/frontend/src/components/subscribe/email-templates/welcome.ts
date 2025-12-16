export const html = (name: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Blazing Blogs</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">
                🚀 Welcome to Blazing Blogs!
              </h1>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 24px; font-weight: 600;">
                Hi ${name}! 👋
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                Thank you for subscribing to <strong>Blazing Blogs</strong>! We're thrilled to have you join our community of passionate developers and tech enthusiasts.
              </p>
              
              <p style="margin: 0 0 30px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                You'll now receive the latest articles, insights, and updates about technology, web development, and the journey of building meaningful digital experiences.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; margin: 30px 0;">
                <tr>
                  <td style="text-align: center;">
                    <a href="${process.env.SITE_URL || 'https://blazing-blogs-frontend.vercel.app'}/blogs" 
                       style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                      Explore Our Blogs
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Features List -->
              <div style="background-color: #f7fafc; border-radius: 12px; padding: 24px; margin: 30px 0;">
                <h3 style="margin: 0 0 16px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">
                  What to expect:
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 15px; line-height: 1.8;">
                  <li style="margin-bottom: 8px;">📝 Latest articles on web development and technology</li>
                  <li style="margin-bottom: 8px;">💡 Practical insights and best practices</li>
                  <li style="margin-bottom: 8px;">🚀 Performance tips and optimization strategies</li>
                  <li style="margin-bottom: 8px;">🎨 Design and UX inspiration</li>
                </ul>
              </div>
              
              <p style="margin: 30px 0 0 0; color: #718096; font-size: 14px; line-height: 1.6;">
                If you have any questions or feedback, feel free to reach out. We'd love to hear from you!
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 12px 0; color: #718096; font-size: 14px;">
                <strong style="color: #1a1a1a;">Blazing Blogs</strong>
              </p>
              <p style="margin: 0 0 20px 0; color: #a0aec0; font-size: 12px;">
                A passionate engineer sharing insights on technology and creativity
              </p>
              <p style="margin: 0; color: #a0aec0; font-size: 12px;">
                <a href="${process.env.SITE_URL || 'https://blazing-blogs-frontend.vercel.app'}" 
                   style="color: #667eea; text-decoration: none; margin: 0 8px;">
                  Visit Website
                </a>
                <span style="color: #cbd5e0;">|</span>
                <a href="${process.env.SITE_URL || 'https://blazing-blogs-frontend.vercel.app'}/contact" 
                   style="color: #667eea; text-decoration: none; margin: 0 8px;">
                  Contact Us
                </a>
              </p>
              <p style="margin: 20px 0 0 0; color: #cbd5e0; font-size: 11px;">
                You're receiving this email because you subscribed to Blazing Blogs newsletter.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`