"use client";

import { useState } from "react";

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path
      fillRule="evenodd"
      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function FloatingContacts() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const contacts = [
    {
      id: "calendly",
      href: "https://calendly.com/matheus-puppe/n8nexus-conversa",
      icon: <CalendarIcon />,
      label: "Agendar Conversa",
      bgColor: "bg-[#006bff]",
      hoverBgColor: "hover:bg-[#0052cc]",
      shadowColor: "shadow-[#006bff]/40",
    },
    {
      id: "whatsapp",
      href: "https://wa.me/5511995597242",
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      bgColor: "bg-[#25D366]",
      hoverBgColor: "hover:bg-[#1da851]",
      shadowColor: "shadow-[#25D366]/40",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {contacts.map((contact, index) => (
        <a
          key={contact.id}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative flex items-center justify-center
            w-14 h-14 rounded-full
            ${contact.bgColor} ${contact.hoverBgColor}
            text-white shadow-lg ${contact.shadowColor}
            hover:shadow-xl hover:scale-110
            transition-all duration-300 ease-out
            animate-fade-in-up
          `}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
          onMouseEnter={() => setIsHovered(contact.id)}
          onMouseLeave={() => setIsHovered(null)}
          aria-label={contact.label}
        >
          {contact.icon}
          
          {/* Tooltip */}
          <span
            className={`
              absolute right-full mr-3 px-3 py-2
              bg-midnight-900 text-white text-sm font-medium
              rounded-lg whitespace-nowrap
              shadow-lg border border-white/10
              transition-all duration-200
              ${isHovered === contact.id 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-2 pointer-events-none"
              }
            `}
          >
            {contact.label}
            {/* Arrow */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <span className="block w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-midnight-900" />
            </span>
          </span>
          
          {/* Pulse animation ring */}
          <span className="absolute inset-0 rounded-full animate-ping-slow opacity-20 bg-current" />
        </a>
      ))}
    </div>
  );
}


