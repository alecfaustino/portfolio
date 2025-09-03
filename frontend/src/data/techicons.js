import {
  SiJavascript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRubyonrails,
  SiJquery,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiMocha,
} from "react-icons/si";
import { FaCookie, FaLock, FaMugHot, FaExchangeAlt } from "react-icons/fa";

const techIcons = {
  html: <SiHtml5 title="HTML" />,
  css: <SiCss3 title="CSS" />,
  javascript: <SiJavascript title="JavaScript" />,
  react: <SiReact title="React" />,
  nodejs: <SiNodedotjs title="Node.js" />,
  expressjs: <SiExpress title="Express.js" />,
  ruby: <SiRuby title="Ruby" />,
  jquery: <SiJquery title="jQuery" />,
  cookies: <FaCookie title="cookies" />,
  bcrypt: <FaLock title="bcrypt" />,
  ajax: <FaExchangeAlt title="AJAX" />,
  bootstrap: <SiBootstrap title="bootstrap" />,
  sass: <SiSass title="sass" />,
  postgresql: <SiPostgresql title="PostgreSQL" />,
  mocha: <SiMocha title="mocha" />,
  git: <SiGit title="git" />,
  chai: <FaMugHot title="chai" />,
  mongodb: <SiMongodb title="MongoDB" />,
  rails: <SiRubyonrails title="Ruby on Rails" />,
};

module.exports = techIcons;
