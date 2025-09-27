"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";
import { useEffect, useState } from "react";
import { useFeatureFlagVariantKey } from "posthog-js/react";

export default function BlogAndFAQ() {
  const [currentItem, setcurrentItem] = useState<string | undefined>();
  // 💡 Tar i bruk feature-flagg
  const shouldOpenAccordion = useFeatureFlagVariantKey("open-faq-flag");

  // 💡 Åpner accordion om feature-flagg er aktivt
  useEffect(() => {
    if (shouldOpenAccordion === "test") {
      setcurrentItem("how-to-fill-form");
    }
  }, [shouldOpenAccordion]);

  function trackFAQEvent(section: string) {
    posthog.capture("faq_section_clicked", { section });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Welcome to Our Knowledge Hub
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest blog posts and find answers to frequently
                  asked questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest Blog Posts
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with our latest articles and insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <BlogPostCard
                title="Getting Started with Web Development"
                description="Learn the basics of HTML, CSS, and JavaScript to kickstart your web development journey."
                date="May 15, 2023"
                category="Development"
                image="/firefly1.jpg?height=200&width=400"
              />
              <BlogPostCard
                title="The Future of AI in Business"
                description="Discover how artificial intelligence is transforming businesses across various industries."
                date="June 22, 2023"
                category="Technology"
                image="/firefly2.jpg?height=200&width=400"
              />
              <BlogPostCard
                title="Responsive Design Best Practices"
                description="Ensure your website looks great on all devices with these responsive design techniques."
                date="July 8, 2023"
                category="Design"
                image="/firefly3.jpg?height=200&width=400"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline">View All Posts</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services and
                  products.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <Accordion
                value={currentItem}
                type="single"
                collapsible
                className="w-full"
                // 💡 Tar i bruk setCurrentItem, for å holde rede på hva som er åpent
                onValueChange={(value) => {
                  setcurrentItem(value);
                  trackFAQEvent(value);
                }}
              >
                <AccordionItem value="how-to-fill-form">
                  <AccordionTrigger>How do I fill out form?</AccordionTrigger>
                  <AccordionContent>
                    To fill out form, go to <Link href="/funnel">funnel</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accepted-payment-methods">
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept various payment methods including credit/debit
                    cards (Visa, MasterCard, American Express), PayPal, and bank
                    transfers. For enterprise customers, we also offer
                    invoice-based payments with net-30 terms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reset-password">
                  <AccordionTrigger>
                    How can I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    If you&apos;ve forgotten your password, click on the
                    &quot;Forgot Password&quot; link on the login page. Enter
                    your email address, and we&apos;ll send you instructions to
                    reset your password. For security reasons, the reset link is
                    valid for 24 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="refund-policy">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 30-day money-back guarantee for all our
                    subscription plans. If you&apos;re not satisfied with our
                    service, you can request a refund within 30 days of your
                    purchase. Please contact our support team to initiate the
                    refund process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact-support">
                  <AccordionTrigger>
                    How can I contact customer support?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reach our customer support team through multiple
                    channels: email at support@yourbrand.com, live chat
                    available on our website during business hours (9 AM - 5 PM
                    EST), or by phone at +1-800-123-4567. We typically respond
                    to all inquiries within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="text-center">
                <p className="text-muted-foreground">
                  Didn&apos;t find what you&apos;re looking for?
                </p>
                <Button className="mt-4">Contact Support</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

function BlogPostCard({
  title,
  description,
  date,
  category,
  image,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">{date}</div>
          <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {category}
          </div>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
