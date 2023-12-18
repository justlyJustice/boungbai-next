import CoverSection from "@/ui/common/Cover";
import {
  GiftIcon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/20/solid";

export default function CoreValues() {
  return (
    <>
      <CoverSection headingText="Core Values" span="Core Values" />

      <section className="pages">
        <div className="container">
          <h4 className="pages-heading">WE EXIST TO:</h4>
          <>
            <div className="values">
              <div className="value">
                {/* <i className=" fa-solid fa-users" /> */}
                <UsersIcon className="i" />

                <p>
                  Innovatively solve humanity problems with little profit for
                  self-sustenance & growth.
                </p>
              </div>
              <div className="value">
                {/* <i className="fa-solid fa-circle-user"></i> */}
                <UserCircleIcon className="i" />
                <p>
                  Go to the last lap to get things done rightly in a fun-filled
                  environment.
                </p>
              </div>
            </div>
          </>

          <>
            <div className="values">
              <div className="value">
                {/* <i className="fa-solid fa-gift"></i> */}
                <GiftIcon className="i" />
                <p>
                  Individual opportunity and reward based on merit; employees as
                  stakeholders.
                </p>
              </div>

              <div className="value">
                {/* <i className="fa-solid fa-user-plus"></i> */}
                <UserPlusIcon className="i" />
                <p>
                  Continuous self-improvement via training/retraining. Customer
                  satisfaction is key.
                </p>
              </div>
            </div>
          </>

          <div className="values">
            <div className="value">
              {/* <i className="fa-solid fa-cogs"></i> */}
              <CogIcon className="i" />
              <p>
                Welcome/try all new ideas and pardon sincere errors not
                considered as SIN in solving problems.
              </p>
            </div>

            <div className="value">
              {/* <i className="fa-solid fa-street-view"></i> */}
              <ViewColumnsIcon className="i" />

              <p>
                To create a place for the Izon-man notwithstanding technological
                advancements at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
