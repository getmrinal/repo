import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Terminal from 'terminal-in-react';
import pseudoFileSystem from 'terminal-in-react-pseudo-file-system-plugin';
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';

export default function Greeting() {
  const FileSystemPlugin = pseudoFileSystem();
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  const handleCommand = (text) => {
    if (text == 'resume') {
      setTimeout(() => {
        window.open('https://drive.google.com/file/d/18orEgFCkJYa5cPP3MVNRXC2Rr96U9O49/view', '_blank');
      }, 200);
      return 'Opening Resume!'

    }

    if (text == 'google') {
      setTimeout(() => {
        window.open('https://google.com', '_blank');
      }, 200);

      return 'Opening Google!'
    }

    if (text == 'mail') {
      setTimeout(() => {
        // window.location = ('mailto:someone@yoursite.com?subject=Mail from Our Site', '_blank');
        document.getElementById('MailClick').click();
      }, 200);

      return 'Opening your mail app, If not opened please ping me on dmrinal626@gmail.com'
    }
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div style={{ display: "none" }}>
        <a id="MailClick" className="MailClick" href="mailto:user@domain.com?Subject=Hello%20User">Inbox me!</a>

      </div>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}

              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
                <span className="wave-emoji">{emoji("🙂")}</span>

              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
            <Terminal

              startState="maximised"
              color={isDark ? 'yellow' : 'grey'}
              backgroundColor={isDark ? '#212121' : '#d5ede6'}
              barColor={isDark ? 'black' : 'white'}
              prompt={isDark ? '#e8bbd0' : 'grey'}
              style={{ fontWeight: "bold", fontSize: "1em" }}
              plugins={[
                FileSystemPlugin,
                {
                  class: NodeEvalPlugin,
                  config: {
                    filesystem: FileSystemPlugin.displayName
                  }
                }
              ]}
              commands={{
                opengoogle: () => handleCommand('google'),
                showmsg: () => "Hello World",
                hey: () => 'Hey, How you doin !!',
                hello: () => 'Hey, How you doin !!',
                hi: () => 'Nope ! i am not doing that',
                whoami: () => 'I am Terminal',
                mrinal: () => 'Woah, you remember me :)',
                time: () => Date().toString(),
                resume: () => handleCommand('resume'),
                mail: () => handleCommand('mail'),



              }}
              descriptions={{
                'open-google': 'opens google.com',
                showmsg: 'shows a message',
                alert: 'alert', popup: 'alert',
                hey: 'Hey, How you doin !!',
                hello: 'Nope ! i am not doing that',
                hi: 'Hmmm !',
                whoami: 'I am Terminal',
                mrinal: 'Check By Typing',
                time: 'Show Date',
              }}
              msg='Type "help" for the supported commands !'
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
