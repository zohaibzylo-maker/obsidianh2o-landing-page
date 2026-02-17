import { Button } from "@/components/ui/button";
import { Droplet, Leaf, Zap } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import WaterWaves from "@/components/WaterWaves";

/**
 * Design Philosophy: Minimalist Luxury - "Liquid Obsidian"
 * - Asymmetric layouts with generous whitespace
 * - Silver liquid metal aesthetic
 * - Playfair Display headings + Lato body text
 * - Subtle blue accents and smooth animations
 * - Newsletter form with email validation and success feedback
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-accent">obsidian</span>H2O
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#purity" className="text-sm hover:text-accent transition-colors">
              PURITY
            </a>
            <a href="#minerals" className="text-sm hover:text-accent transition-colors">
              MINERALS
            </a>
            <a href="#sustainability" className="text-sm hover:text-accent transition-colors">
              SUSTAINABILITY
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Water waves background animation */}
        <WaterWaves />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Liquid <span className="text-accent">Obsidian</span>
              </h1>
              <p className="text-xl text-foreground/80 font-light">
                Premium purity distilled from nature's most pristine sources
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-background font-semibold"
              >
                Discover More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Learn Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <p className="text-sm text-foreground/60">Pure Water</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">7.8</div>
                <p className="text-sm text-foreground/60">pH Level</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">64mg</div>
                <p className="text-sm text-foreground/60">Calcium</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center fade-in">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/JroDEKCwN4fUCsdBILlvHX/sandbox/KkbsKeMh5mXdBn03zIMPxh-img-1_1770821208000_na1fn_aGVyby1ib3R0bGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnJvREVLQ3dONGZVQ3NkQklMbHZIWC9zYW5kYm94L0trYnNLZU1oNW1YZEJuMDN6SU1QeGgtaW1nLTFfMTc3MDgyMTIwODAwMF9uYTFmbl9hR1Z5YnkxaWIzUjBiR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S2B3lb-clEac5vFIf~pRcgUYgcsL2TF-dQsKg7l4xbFKouWOo9FoLjf-QlgH~qWPVU-qiibAf4Kxp5o1RHOR7bJAlrZ-4VuE6caA3BvP1ddpXs1Lkvzq~030xwFOWvYjHnOUAFY21ckHxpIXw4Vm~2v600pSIUbsiS8BSFQbQR3DCWxcODeESN1LDqvN-Nt~jYgbIMfuaG6PDZt5ZlY9aTTcMAXH-2PRHUtlJryAOLoxBZKcXlAA1KWR4Cprdi-BbgGjTa84tpkq8tUaGe2KhrTss5keYNZF4iRlXZHmCpQSXvpYbxnlN1uGFgZeykk-OqT5dhOSUkIdrIJkiiseiQ__"
              alt="obsidianH2O Premium Bottle"
              className="w-full h-full object-contain drop-shadow-2xl animate-float mix-blend-screen"
              style={{
                filter: "brightness(1.1) contrast(1.05)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Purity Section */}
      <section id="purity" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 flex items-center justify-center order-2 lg:order-1 fade-in">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/JroDEKCwN4fUCsdBILlvHX/sandbox/KkbsKeMh5mXdBn03zIMPxh-img-2_1770821211000_na1fn_aGVyby13YXRlci1mbG93.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnJvREVLQ3dONGZVQ3NkQklMbHZIWC9zYW5kYm94L0trYnNLZU1oNW1YZEJuMDN6SU1QeGgtaW1nLTJfMTc3MDgyMTIxMTAwMF9uYTFmbl9hR1Z5YnkxM1lYUmxjaTFtYkc5My5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lOHKixYqdbLVwrqcE7ysBC6xjSaXaOS-lGvugsDULmtFDtRTcuv72ZwhiREzFPfc~Oo3EcH4dy7utUbdAN39uRRSuj860V4AMwEO8m9qZ4EYNXH-vdhm-NT8pAGADRYk-R1RbjxFbun~O-ffZYEL9kv2FE0L7STNG4X80ektpdopOisonSbMveVGzqQeYBVcBCXRm~AIDsbglTaQUsU4Bb3LbRN2ByAN78rtmoDRQAC1un50OOrMb3d8tWaG2PwlcnU7AnxkEMA-lRTbO6dTmHFO0iQ5nQmp-Q~aoJzMbBiUAuFXfGQmjKFT6784~m~jdjbnK5ml-1xiiHqmNxY5TA__"
                alt="Water Flow Purity"
                className="w-full h-full object-contain drop-shadow-2xl animate-float-slow"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2 fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-accent"></div>
                  <h2>Pure Crystalline Water</h2>
                </div>
                <p className="text-foreground/70 text-lg">
                  Every drop of obsidianH2O represents nature's commitment to perfection. Sourced from pristine glacial springs untouched by modern contamination.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Droplet className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Zero Contaminants</h3>
                    <p className="text-foreground/60 text-sm">
                      Naturally filtered through ancient rock formations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Optimal pH Balance</h3>
                    <p className="text-foreground/60 text-sm">
                      Perfectly balanced at 7.8 for maximum hydration
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Essential Minerals</h3>
                    <p className="text-foreground/60 text-sm">
                      Rich in calcium, magnesium, and potassium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minerals Section */}
      <section id="minerals" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="text-center mb-16 fade-in">
            <h2 className="mb-4">Mineral Composition</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Naturally enriched with essential minerals that support your body's optimal function
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {/* Calcium */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors">
              <div className="text-4xl font-bold text-accent mb-2">64mg</div>
              <h3 className="font-semibold mb-2">Calcium</h3>
              <p className="text-foreground/60 text-sm">
                Supports bone health and muscle function for optimal wellness
              </p>
            </div>

            {/* Magnesium */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors">
              <div className="text-4xl font-bold text-accent mb-2">4.8mg</div>
              <h3 className="font-semibold mb-2">Magnesium</h3>
              <p className="text-foreground/60 text-sm">
                Enhances energy production and promotes mental clarity
              </p>
            </div>

            {/* Potassium */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors">
              <div className="text-4xl font-bold text-accent mb-2">4.6mg</div>
              <h3 className="font-semibold mb-2">Potassium</h3>
              <p className="text-foreground/60 text-sm">
                Regulates fluid balance and supports cardiovascular health
              </p>
            </div>
          </div>

          {/* Mineral Visualization */}
          <div className="mt-16 flex justify-center fade-in">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/JroDEKCwN4fUCsdBILlvHX/sandbox/KkbsKeMh5mXdBn03zIMPxh-img-3_1770821206000_na1fn_bWluZXJhbC1jb21wb3NpdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnJvREVLQ3dONGZVQ3NkQklMbHZIWC9zYW5kYm94L0trYnNLZU1oNW1YZEJuMDN6SU1QeGgtaW1nLTNfMTc3MDgyMTIwNjAwMF9uYTFmbl9iV2x1WlhKaGJDMWpiMjF3YjNOcGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BJy6kldCBLgFidz1t4Ws6yC-v74oDVTlkfQdltrzYAav49TxDKPdUS55qRAPEF9RwRq0m-KZq3-VTFaRgaRxX1DhmR1F8SpcHjkj80x-0piwq4NfSRKR2AswK4OCQm4Y7-nepMZot1LG6Dgbs5VRC~UQW8qEcwCxRmvRDOZl-AU0DcApPaGAlcRO7TtcGOZObdiWizOeT31gteCBwOJZkU0Qbc0Si27XXfJqZgySiLTW-rxOjNSbL51Gwx-WUSCI9prJR6lXxfUGMWX5WzxHM-xO09Icxy1n9aZy799nv8fNH8TKcWELhdwuAhAEHtnve8l659KkmA-v7FtCsE7l1g__"
              alt="Mineral Composition"
              className="w-full max-w-2xl h-auto drop-shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-accent"></div>
                  <h2>Sustainable Excellence</h2>
                </div>
                <p className="text-foreground/70 text-lg">
                  We believe in preserving nature for future generations. Every bottle of obsidianH2O is a commitment to environmental stewardship.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">100% Recyclable Bottles</h3>
                  <p className="text-foreground/60 text-sm">
                    Crafted from premium, fully recyclable materials with zero plastic waste
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Carbon Neutral Operations</h3>
                  <p className="text-foreground/60 text-sm">
                    Our entire production process is offset with renewable energy initiatives
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Protected Water Sources</h3>
                  <p className="text-foreground/60 text-sm">
                    We actively protect and restore the pristine ecosystems that sustain our springs
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 flex items-center justify-center fade-in">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/JroDEKCwN4fUCsdBILlvHX/sandbox/KkbsKeMh5mXdBn03zIMPxh-img-5_1770821208000_na1fn_c3VzdGFpbmFiaWxpdHktZWFydGg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnJvREVLQ3dONGZVQ3NkQklMbHZIWC9zYW5kYm94L0trYnNLZU1oNW1YZEJuMDN6SU1QeGgtaW1nLTVfMTc3MDgyMTIwODAwMF9uYTFmbl9jM1Z6ZEdGcGJtRmlhV3hwZEhrdFpXRnlkR2cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kP3ZzfivZmLoynrft1WpeJnWeDg-YESjI79WVHJQXZjOIEQqpB3GI4innAFNgAhEJGjN-Ewifut-hikNlRsA5zfyMtSBWrKcHpX8x5R2qgxeGm3WP9fJQ1suHWZp5rDwZIyWlgp6CCtmDleB1UvcKbETTq9kgt0BgAs0e8NkaE2gyEWDQRRIBOdLi3VFoelIJn0QNz1NYyDd5t1wvAGCytRWfuMhlfSuwNXCbQP4Y4XYubrZXe7AqWOIhMBdVbLSAzyFUKEEL~xyoguGh1T2a660ZGt5LX7DMDKseMJaVi~KBF2DZKx~TjLbFH7QUXpU6qfOROKHELEu5bVZ-8ehHg__"
                alt="Sustainability"
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container text-center space-y-8 fade-in">
          <div className="space-y-4">
            <h2>Experience Pure Luxury</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Join thousands who have discovered the difference that true purity makes
            </p>
          </div>

          <div className="space-y-6">
            {/* Newsletter Form */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-foreground/60 mb-6">Get exclusive offers and purity insights delivered to your inbox</p>
              <NewsletterForm />
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">obsidianH2O</h3>
              <p className="text-foreground/60 text-sm">
                Premium purity distilled from nature's most pristine sources
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Purity</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Minerals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 obsidianH2O. All rights reserved. | Premium Purity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
