import CoverSection from "@/ui/common/Cover";
import TeamMember from "@/ui/team/TeamMember";
import team from ".";

export default function TeamPage() {
  return (
    <>
      <CoverSection headingText="Boungbai Team" span="Boungbai Team" />

      <section className="pages">
        <div className="container">
          <div className="all-team">
            {team.map((member, i) => (
              <TeamMember
                name={member.name}
                image={member.image}
                position={member.position}
                department={member.department}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
