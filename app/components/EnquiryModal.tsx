// "use client";
// import React, { useCallback, useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     grecaptcha: any;
//   }
// }

// export function openEnquiryModal() {
//   if (typeof window !== "undefined") {
//     window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
//   }
// }

// export default function EnquiryModal() {
//   const [open, setOpen] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const recaptchaContainerRef = useRef<HTMLDivElement>(null);
//   const [fullName, setFullName] = useState('');
//   const [address, setAddress] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const onEsc = useCallback((e: KeyboardEvent) => {
//     if (e.key === "Escape") setOpen(false);
//   }, []);

//   const handleOpenEvent = useCallback(() => setOpen(true), []);

//   // Function to render reCAPTCHA v2 checkbox
//   const renderRecaptcha = useCallback(() => {
//     if (window.grecaptcha && recaptchaContainerRef.current && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
//       try {
//         window.grecaptcha.render(recaptchaContainerRef.current, {
//           'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
//           'theme': 'light'
//         });
//       } catch (error) {
//         console.error("reCAPTCHA render error:", error);
//       }
//     }
//   }, []);

//   // Function to load reCAPTCHA script
//   const loadRecaptchaScript = useCallback(() => {
//     // Remove any existing reCAPTCHA scripts
//     const existingScript = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
//     if (existingScript) {
//       existingScript.remove();
//     }

//     const script = document.createElement('script');
//     script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     // Make the render function available globally for reCAPTCHA callback
//     (window as any).onRecaptchaLoad = renderRecaptcha;
//   }, [renderRecaptcha]);

//   useEffect(() => {
//     window.addEventListener("open-enquiry-modal", handleOpenEvent);
//     window.addEventListener("keydown", onEsc);
    
//     // Load reCAPTCHA when modal opens
//     if (open) {
//       setTimeout(() => {
//         loadRecaptchaScript();
//       }, 100);
//     }
    
//     return () => {
//       window.removeEventListener("open-enquiry-modal", handleOpenEvent);
//       window.removeEventListener("keydown", onEsc);
      
//       // Clean up global callback
//       if ((window as any).onRecaptchaLoad) {
//         delete (window as any).onRecaptchaLoad;
//       }
//     };
//   }, [handleOpenEvent, onEsc, open, loadRecaptchaScript]);

//   const close = () => setOpen(false);

//   const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     try {
//       // Check if reCAPTCHA is completed
//       let isRecaptchaValid = true;
      
//       if (window.grecaptcha) {
//         const recaptchaResponse = window.grecaptcha.getResponse();
//         if (!recaptchaResponse) {
//           isRecaptchaValid = false;
//           alert("Please complete the reCAPTCHA verification");
//         }
//       }
      
//       if (!isRecaptchaValid) {
//         setSubmitting(false);
//         return;
//       }
      
//       // Submit to backend Enquiry API
//       const base = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8085').replace(/\/$/, '');
//       const res = await fetch(`${base}/enquiry`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: fullName,
//           contactNo,
//           address,
//           email,
//           message
//         })
//       });
//       if (!res.ok) {
//         throw new Error('Failed to submit enquiry');
//       }
//       alert('Your enquiry has been submitted successfully.');
//       setOpen(false);
      
//       // Reset reCAPTCHA after successful submission
//       if (window.grecaptcha) {
//         window.grecaptcha.reset();
//       }
//       // Reset fields
//       setFullName('');
//       setAddress('');
//       setContactNo('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error("Form submission error:", error);
//       alert("An error occurred. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[100]">
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
//       <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
//         <div className="relative mt-8 w-full max-w-xl rounded-2xl bg-white shadow-2xl">
//           <div className="flex items-center justify-between px-5 pt-5">
//             <div className="text-center w-full">
//               <div className="text-sm text-neutral-500">Abacus Live Classes</div>
//               <h3 className="mt-1 text-2xl font-bold text-neutral-900">Book A Free Demo Class</h3>
//               <div className="text-sm text-neutral-500">Age Group 6–15 years only</div>
//             </div>
//             <button aria-label="Close" onClick={close} className="absolute right-3 top-3 rounded-md p-2 text-neutral-600 hover:bg-neutral-100">✕</button>
//           </div>

//           <form onSubmit={onSubmit} className="px-5 pb-5 pt-4 space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//             <div className="grid grid-cols-2 gap-3">
//               <input
//                 type="tel"
//                 placeholder="Contact Number"
//                 className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
//                 value={contactNo}
//                 onChange={(e) => setContactNo(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <textarea
//               placeholder="Message"
//               rows={3}
//               className="w-full border border-neutral-300 rounded-md bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-800"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
            
//             {/* reCAPTCHA container */}
//             <div ref={recaptchaContainerRef} className="flex justify-center"></div>

//             <div className="text-xs text-neutral-500">
//               By registering here, I agree to Vertex Abacus Terms & Conditions and Privacy Policy
//             </div>

//             <button type="submit" disabled={submitting} className="w-full rounded-lg bg-orange-500 px-4 py-3 text-white font-semibold hover:bg-orange-600 active:scale-95 transition">
//               {submitting ? "Booking..." : "Book Now"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function openEnquiryModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
  }
}

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  const handleOpenEvent = useCallback(() => setOpen(true), []);

  // Function to render reCAPTCHA v2 checkbox
  const renderRecaptcha = useCallback(() => {
    if (window.grecaptcha && recaptchaContainerRef.current && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      try {
        window.grecaptcha.render(recaptchaContainerRef.current, {
          'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          'theme': 'light'
        });
      } catch (error) {
        console.error("reCAPTCHA render error:", error);
      }
    }
  }, []);

  // Function to load reCAPTCHA script
  const loadRecaptchaScript = useCallback(() => {
    // Remove any existing reCAPTCHA scripts
    const existingScript = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Make the render function available globally for reCAPTCHA callback
    (window as any).onRecaptchaLoad = renderRecaptcha;
  }, [renderRecaptcha]);

  useEffect(() => {
    window.addEventListener("open-enquiry-modal", handleOpenEvent);
    window.addEventListener("keydown", onEsc);
    
    // Load reCAPTCHA when modal opens
    if (open) {
      setTimeout(() => {
        loadRecaptchaScript();
      }, 100);
    }
    
    return () => {
      window.removeEventListener("open-enquiry-modal", handleOpenEvent);
      window.removeEventListener("keydown", onEsc);
      
      // Clean up global callback
      if ((window as any).onRecaptchaLoad) {
        delete (window as any).onRecaptchaLoad;
      }
    };
  }, [handleOpenEvent, onEsc, open, loadRecaptchaScript]);

  const close = () => setOpen(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Check if reCAPTCHA is completed
      let isRecaptchaValid = true;
      
      if (window.grecaptcha) {
        const recaptchaResponse = window.grecaptcha.getResponse();
        if (!recaptchaResponse) {
          isRecaptchaValid = false;
          alert("Please complete the reCAPTCHA verification");
        }
      }
      
      if (!isRecaptchaValid) {
        setSubmitting(false);
        return;
      }
      
      // Submit to backend Enquiry API
      const base = process.env.NEXT_PUBLIC_BACKEND_URL || '';
      const res = await fetch("https://api.vertexabacus.com/enquiry", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          contactNo,
          address,
          message
        })
      });
      if (!res.ok) {
        throw new Error('Failed to submit enquiry');
      }
      alert('Your enquiry has been submitted successfully.');
      setOpen(false);
      
      // Reset reCAPTCHA after successful submission
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      // Reset fields
      setFullName('');
      setAddress('');
      setContactNo('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">       
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
        <div className="relative mt-8 w-full max-w-xl rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between px-5 pt-5">
            <div className="text-center w-full">
              <div className="text-sm text-neutral-500">Abacus Live Classes</div>
              <h3 className="mt-1 text-2xl font-bold text-neutral-900">Book A Free Demo Class</h3>
              <div className="text-sm text-neutral-500">Age Group 6–15 years only</div>
            </div>
            <button aria-label="Close" onClick={close} className="absolute right-3 top-3 rounded-md p-2 text-neutral-600 hover:bg-neutral-100">✕</button>
          </div>

          <form onSubmit={onSubmit} className="px-5 pb-5 pt-4 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full border border-neutral-300 rounded-md bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            
            {/* reCAPTCHA container */}
            <div ref={recaptchaContainerRef} className="flex justify-center"></div>

            <div className="text-xs text-neutral-500">
              By registering here, I agree to Vertex Abacus Terms & Conditions and Privacy Policy
            </div>

            <button type="submit" disabled={submitting} className="w-full rounded-lg bg-orange-500 px-4 py-3 text-white font-semibold hover:bg-orange-600 active:scale-95 transition">
              {submitting ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}