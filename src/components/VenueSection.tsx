import React, { useState } from 'react';

export const VenueSection: React.FC = () => {
  const [venueImgError, setVenueImgError] = useState(false);

  // User-provided Google Maps link for the venue
  const googleMapsUrl = 'https://maps.app.goo.gl/V5Hgs8njN1bSCTuz7?g_st=aw';

  return (
    <section id="venue" className="py-16 sm:py-24 px-4 sm:px-6 relative" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-cairo font-semibold text-[#d4af37]">
            مكان الاحتفال
          </p>
          <h2 className="text-3xl sm:text-5xl font-amiri text-[#fdfbf7] font-bold">
            قاعة دايموند بدار المهندسين
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#d8c3a5]">
            <svg
              className="w-5 h-5 text-[#d4af37] shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-cairo font-light">
              قاعة دايموند بدار المهندسين، المعصرة، حلوان
            </span>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto pt-2" />
        </div>

        {/* Venue Showcase Card */}
        <div className="rounded-2xl bg-gradient-to-b from-[#1c1714] to-[#12100e] border border-[#d4af37]/40 shadow-[0_15px_45px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Ballroom Photo Banner */}
          <div className="relative w-full h-72 sm:h-80 md:h-[420px] overflow-hidden bg-[#161311]">
            {!venueImgError ? (
              <img
                src="/assets/aistudio/venue_24aecb3e.jpeg"
                alt="قاعة دايموند بدار المهندسين للاحتفال بحفل الزفاف"
                onError={() => setVenueImgError(true)}
                className="w-full h-full object-cover object-center filter brightness-[0.95] hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
            ) : (
              <img
                src="/images/venue.jpg"
                alt="قاعة دايموند بدار المهندسين"
                className="w-full h-full object-cover object-center filter brightness-[0.95]"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1714] via-transparent to-transparent pointer-events-none" />

            {/* Floating Venue Tag */}
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1.5 rounded-full bg-[#0f0e0d]/85 backdrop-blur-md border border-[#d4af37]/50 text-xs font-cairo font-semibold text-[#f7e7ce]">
                القاعة الرسمية للزفاف
              </span>
            </div>
          </div>

          {/* Details & Action */}
          <div className="p-6 sm:p-10 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="font-amiri text-3xl sm:text-4xl text-[#fff8e7] font-bold">
                قاعة دايموند بدار المهندسين
              </h3>
              <p className="text-sm sm:text-base text-[#bdae9c] font-cairo font-light leading-relaxed">
                أجواء ملكية ساحرة تزدان بالإضاءات المتلألئة والفخامة الراقية، مع كرم الضيافة وحسن الاستقبال لنصنع معاً ذكريات لا تُنسى في ليلة العمر.
              </p>

              {/* Event Timing & Program */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-right border-y border-[#d4af37]/20 py-5 my-6">
                <div className="p-3.5 rounded-lg bg-[#14110f]/80 border border-[#d4af37]/15">
                  <span className="text-xs font-cairo text-[#d4af37] block font-semibold">٦:٠٠ مساءً</span>
                  <span className="text-sm sm:text-base font-amiri text-[#f7e7ce] mt-0.5 block font-bold">استقبال الضيوف الكرام</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#14110f]/80 border border-[#d4af37]/15">
                  <span className="text-xs font-cairo text-[#d4af37] block font-semibold">٧:٣٠ مساءً</span>
                  <span className="text-sm sm:text-base font-amiri text-[#f7e7ce] mt-0.5 block font-bold">الزفّة والدخول الملكي</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#14110f]/80 border border-[#d4af37]/15">
                  <span className="text-xs font-cairo text-[#d4af37] block font-semibold">٩:٠٠ مساءً</span>
                  <span className="text-sm sm:text-base font-amiri text-[#f7e7ce] mt-0.5 block font-bold">العشاء ومراسم الفرح</span>
                </div>
              </div>

              {/* View Location Button (VIEW LOCATION in Arabic) */}
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#d4af37] text-[#0f0e0d] text-xs sm:text-sm font-cairo font-bold hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 min-h-[48px] shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4 text-[#0f0e0d] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>عرض موقع القاعة على الخريطة</span>
                </a>
              </div>

              <p className="text-xs text-[#a89a85] font-cairo font-light pt-2">
                يفتح موقع قاعة دايموند بدار المهندسين، المعصرة، حلوان مباشرة عبر خرائط Google لسهولة الوصول
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
