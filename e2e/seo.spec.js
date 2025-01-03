import { test, expect } from '@playwright/test';

test.describe('SEO elements', () => {
  test('homepage has correct meta tags', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/All posts | Blog/);
    
    const description = await page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', 'My blog, mainly about code and other nerdy stuff');
    
    const html = await page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
    
    const ogTitle = await page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', 'All posts');
    
    const ogDescription = await page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', 'My blog, mainly about code and other nerdy stuff');
    
    const ogType = await page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'website');
    
    const twitterCard = await page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary');
    
    const twitterCreator = await page.locator('meta[name="twitter:creator"]');
    await expect(twitterCreator).toHaveAttribute('content', 'eStivaros');
    
    const twitterTitle = await page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute('content', 'All posts');
    
    const twitterDescription = await page.locator('meta[name="twitter:description"]');
    await expect(twitterDescription).toHaveAttribute('content', 'My blog, mainly about code and other nerdy stuff');
  });

  test('blog post has correct meta tags', async ({ page }) => {
    await page.goto('/the-developer-after-you-hates-you/');
    
    await expect(page).toHaveTitle(/The Developer After You Hates You | Blog/);
    
    const description = await page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', 'The person who stumbles upon your code six months after your commit is predisposed to hate you, it\'s natural');
    
    const ogTitle = await page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', 'The Developer After You, Hates You');
  });

  test('404 page has correct meta tags', async ({ page }) => {
    await page.goto('/404.html');
    
    await expect(page).toHaveTitle(/404: Not Found | Blog/);
    
    const description = await page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', 'My blog, mainly about code and other nerdy stuff');
    
    const ogTitle = await page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', '404: Not Found');
  });
}); 
