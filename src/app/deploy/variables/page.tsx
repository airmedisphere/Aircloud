'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function DeploymentVariables() {
  const [variables, setVariables] = useState({
    DATABASE_URL: '',
    RESEND_API_KEY: '',
    GOOGLE_CLIENT_SECRET: '',
    GITHUB_CLIENT_SECRET: '',
    NEXT_PUBLIC_TELEGRAM_API_ID: '',
    NEXT_PUBLIC_TELEGRAM_API_HASH: '',
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: '',
    NEXT_PUBLIC_POSTHOG_HOST: '',
    NEXT_PUBLIC_POSTHOG_KEY: '',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: '',
    NEXT_PUBLIC_GITHUB_CLIENT_ID: '',
    NEXT_PUBLIC_BOT_TOKEN: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send these variables to your deployment platform
      // For example, using the Vercel API or Netlify API
      console.log('Deployment variables:', variables);
      toast.success('Variables saved successfully!');
    } catch (error) {
      toast.error('Failed to save variables');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Deployment Variables</CardTitle>
          <CardDescription>
            Enter your deployment variables below. These will be used during the deployment process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(variables).map((key) => (
              <div key={key} className="grid gap-2">
                <Label htmlFor={key}>{key}</Label>
                <Input
                  id={key}
                  type="text"
                  value={variables[key as keyof typeof variables]}
                  onChange={(e) =>
                    setVariables((prev) => ({
                      ...prev,
                      [key]: e.target.value
                    }))
                  }
                  placeholder={`Enter your ${key}`}
                />
              </div>
            ))}
            <Button type="submit" className="w-full">
              Save Variables
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}