import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">🍯 Pooh Assistant</CardTitle>
          <CardDescription>
            Your friendly personal assistant is ready to help!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              "Sometimes the smallest things take up the most room in your heart."
            </p>
            <Button className="w-full">
              Start Chatting with Pooh
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App 