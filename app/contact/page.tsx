import { MapIcon } from "@heroicons/react/20/solid";
import CoverSection from "../../ui/common/Cover";
import {
  EnvelopeIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

export default function ContactPage() {
  return (
    <>
      <CoverSection headingText="Contact Us" span="Contact Us" />

      <section className="info">
        <div className="content">
          <MapPinIcon className="icon" />

          {/* <i className="fa-solid fa-location"></i> */}

          <p>
            No 30 Ebis Mechanic Road, Opposite Sonia Estate, Amarata, Yenagoa,
            Bayelsa State.
          </p>
        </div>

        <div className="content">
          <DevicePhoneMobileIcon className="icon" />
          {/* <i className="fa-solid fa-phone"></i> */}
          <p>+234 (0) 7025424338</p>
        </div>

        <div className="content">
          <EnvelopeIcon className="icon" />
          {/* <i className="fa-solid fa-envelope"></i> */}
          <p>info@boungbai.com</p>
        </div>
      </section>
    </>
  );
}
