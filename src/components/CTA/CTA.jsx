function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to Buy on Easy Installments?
        </h2>

        <p className="mt-4 text-lg">
          Contact us today and let us help you choose the right product.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/+923325280260"
            className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
          >
            WhatsApp
          </a>

          <a
            href="tel:+923325280260"
            onClick={() => {
              gtag("event", "phone_click", {
                event_category: "Contact",
                event_label: "CTA Section",
              });
            }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;