export const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 pt-12 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src="images/icon-phone.svg" alt="" className="scale-10" />
              </div>
              <a href="tel:+1-543-123-4567" className="hover:text-accentCyan">
                +1-543-123-4567
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src="images/icon-email.svg" alt="" className="scale-10" />
              </div>
              <a
                href="mailto:example@fylo.com"
                className="hover:text-accentCyan"
              >
                example@fylo.com
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan">
                About
              </a>
              <a href="#" className="hover:text-accentCyan">
                Jobs
              </a>
              <a href="#" className="hover:text-accentCyan">
                Press
              </a>
              <a href="#" className="hover:text-accentCyan">
                Blog
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan">
                Contact Us
              </a>
              <a href="#" className="hover:text-accentCyan">
                Terms
              </a>
              <a href="#" className="hover:text-accentCyan">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-3 pb-10">
            <div>
              <a href="#">
                <div className="ficon rounded-full bg-darkBlue p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="#ffffff"
                    fill="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="ficon rounded-full bg-darkBlue p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="#ffffff"
                    fill="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </div>
              </a>
            </div>
            <div>
              <a href="#">
                <div className="ficon rounded-full bg-darkBlue p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
