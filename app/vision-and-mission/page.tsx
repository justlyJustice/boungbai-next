import { ListBulletIcon, TruckIcon } from "@heroicons/react/20/solid";

import CoverSection from "@/ui/common/Cover";

export default function VisionMissionPage() {
  return (
    <>
      <CoverSection
        headingText={`Vision & Mission`}
        span={`Vision & Mission`}
      />

      <section className="pages">
        <div className="container">
          <div className="all">
            <div className="vision">
              <div>
                <ListBulletIcon className="icon" color="orange" />
              </div>

              <div>
                <h5 className="pages-heading" style={{ textAlign: "left" }}>
                  Our Vision
                </h5>

                <p>
                  We stand to equip people even the most vulnerable to
                  innovatively keep solving societal problems not forgetting to
                  be Izonic.
                </p>
              </div>
            </div>

            <div className="vision">
              <div>
                <TruckIcon className="icon" />
                {/* <i
                  style={{ color: "#3475ca" }}
                  className="fa-solid fa-truck"
                ></i> */}
              </div>

              <div>
                <h5 className="pages-heading" style={{ textAlign: "left" }}>
                  Our Mission
                </h5>
                <p>
                  We will take every step necessary to achieve set
                  aims/goals/objectives notwithstanding the cost ... If Boungbai
                  says we are doing it; then we are doing it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
