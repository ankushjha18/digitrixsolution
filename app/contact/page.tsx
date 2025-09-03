import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-balance">Contact Us</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Tell us about your goals. We’ll reply within 1 business day.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Project Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Alex Doe" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="you@company.com" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Budget</label>
                    <Input placeholder="$10,000 - $25,000" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Project details</label>
                    <Textarea rows={6} placeholder="What are you building?" />
                  </div>
                  <Button className="justify-self-start hover:scale-105 transition-transform duration-300">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why work with us</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>• Senior full‑stack expertise</p>
                <p>• Design systems and a11y baked in</p>
                <p>• Growth mindset, measurable outcomes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
