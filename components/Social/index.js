import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Social({ fontSize }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <FacebookIcon
        className="cursor-pointer hover:scale-125 transition duration-500"
        fontSize={fontSize}
      />
      <YouTubeIcon
        className="cursor-pointer hover:scale-125 transition duration-500"
        fontSize={fontSize}
      />
      <InstagramIcon
        className="cursor-pointer hover:scale-125 transition duration-500"
        fontSize={fontSize}
      />
      <TwitterIcon
        className="cursor-pointer hover:scale-125 transition duration-500"
        fontSize={fontSize}
      />
    </div>
  );
}
