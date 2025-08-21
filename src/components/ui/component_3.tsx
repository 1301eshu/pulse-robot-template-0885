import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  useBoxedImage?: boolean;
  ctaUrl?: string;
  nocta?: boolean | 'true' | 'false';
};

export default function FeatureCard({
  icon,
  imageSrc,
  title,
  description,
  useBoxedImage = true,
  ctaUrl,
  nocta = false,
}: FeatureCardProps) {
  const hideCta =
    nocta === true || nocta === 'true' || !ctaUrl || ctaUrl.trim() === '';

  const Wrapper = hideCta ? 'div' : 'a';

  return (
    <Wrapper
      {...(!hideCta ? { href: ctaUrl } : {})}
      className={`h-full group flex flex-col justify-between bg-gray-50 rounded-2xl p-6 
      transition-all duration-300 min-h-[280px]
      ${
        hideCta
          ? 'cursor-default'
          : 'hover:bg-gradient-to-br from-[#051946] to-[#0A3E5E] text-gray-900 hover:text-white hover:-translate-y-2 cursor-pointer'
      }`}
    >
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <div
            className={`h-14 flex items-center mb-6 ${
              useBoxedImage
                ? 'w-14 bg-gray-100 group-hover:bg-white/20 rounded-lg justify-center'
                : ''
            }`}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className={`${
                  useBoxedImage ? 'w-6 h-6' : 'h-[28px] max-w-[100px]'
                } object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.08]`}
              />
            ) : (
              icon
            )}
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>

        {/* Show inline CTA only if not hiding */}
        {!hideCta && (
          <div className="mt-4">
            <span className="inline-flex items-center font-semibold text-black group-hover:text-white transition-all duration-300">
              Learn More
              <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
