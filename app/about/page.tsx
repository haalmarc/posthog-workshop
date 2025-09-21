import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TeamMember } from "./TeamMember";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About YourBrand
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our story, our mission, and the team behind
                  YourBrand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, YourBrand began with a simple mission: to
                  create innovative solutions that make a difference. What
                  started as a small team of three passionate individuals has
                  now grown into a thriving company with over 50 employees
                  across the globe.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey hasn&apos;t always been smooth sailing. We&apos;ve
                  faced challenges, pivoted our strategy, and learned valuable
                  lessons along the way. But through it all, we&apos;ve remained
                  committed to our core values and vision.
                </p>
                <p className="text-muted-foreground">
                  Today, we&apos;re proud to serve thousands of customers
                  worldwide, helping them achieve their goals through our
                  products and services.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/firefly4.jpg?height=400&width=600"
                  alt="Our office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re on a mission to empower businesses and individuals
                  through innovative technology solutions.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what&apos;s possible,
                    embracing new technologies and ideas to create better
                    solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We&apos;re committed to excellence in everything we do, from
                    product development to customer service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in giving back to the community and fostering an
                    inclusive environment where everyone can thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The talented individuals who make YourBrand possible.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMember
                name="Anna Johnson"
                role="CEO & Founder"
                image="/woman1.jpg?height=300&width=300"
                bio="Anna founded YourBrand with a vision to transform the industry. With over 15 years of experience, she leads our strategic direction."
              />
              <TeamMember
                name="Michael Chen"
                role="CTO"
                image="/man1.jpg?height=300&width=300"
                bio="Michael oversees all technical aspects of the company. His innovative approach has been instrumental in our product development."
              />
              <TeamMember
                name="Sarah Williams"
                role="Design Director"
                image="/woman2.jpg?height=300&width=300"
                bio="Sarah brings creativity and user-centered thinking to everything we do. She ensures our products are both beautiful and functional."
              />
              <TeamMember
                name="David Okonkwo"
                role="Head of Marketing"
                image="/man2.jpg?height=300&width=300"
                bio="David leads our marketing efforts with a data-driven approach. He's passionate about sharing our story with the world."
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Join Our Journey
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re always looking for talented individuals to join our
                  team. Check out our current openings or get in touch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button>View Careers</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
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
