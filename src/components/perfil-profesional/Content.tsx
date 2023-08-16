import ProfileData from "./ProfileData";
import Works from "./Works";

export default function Content() {
	return (
		<article
			className="
          w-11/12
          min-h-screen
          mx-auto
          max-w-7xl 
          flex
          flex-col
          lg:flex-row
          justify-center
          items-start
          gap-5
          lg:gap-8
          mt-8
          md:mt-20
          
          "
		>
			<ProfileData />
			<Works />
		</article>
	);
}
