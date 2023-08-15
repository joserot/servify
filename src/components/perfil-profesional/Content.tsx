import ProfileData from "./ProfileData";
import Works from "./Works";

export default function Content() {
	return (
		<article
			className="
          min-h-screen
          mx-auto
          max-w-7xl
          flex
          justify-center
          items-start
          gap-8
          "
		>
			<ProfileData />
			<Works />
		</article>
	);
}
