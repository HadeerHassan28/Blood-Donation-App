import React from "react";
import styles from "./About.module.css";
import aboutimg from "../../assets/About-head.svg";
import { SiQuantconnect } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineHeart } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";

const About = () => {
   return (
    <>
      <View style={styles.overlay} onTouchStart={toggleSelection}></View>
      <View style={`${styles.selection} w-75`}>
        <View style={styles.container}>
          <Text style={styles.heading}>Choose Your Plan</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={`${styles.option} rounded`}
              onPress={handleOptionOne}
              ref={optionOne}
            >
              <Text style={styles.optionText}>Organization</Text>
              <BsHospital size={64} color="#ee394a" />
              <Text style={styles.optionDescription}>
                This Plan Include Hospitals and Blood Banks
              </Text>
              {isOptionOneSelected && (
                <Text style={styles.selectedText}>
                  * You are Following the Organizational Plan
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={`${styles.option} rounded`}
              onPress={handleOptionTwo}
              ref={optionTwo}
            >
              <Text style={styles.optionText}>User</Text>
              <AiOutlineUser size={64} color="#ee394a" />
              <Text style={styles.optionDescription}>
                This Plan Include Donors and Recipients
              </Text>
              {isOptionTwoSelected && (
                <Text style={styles.selectedText}>
                  * You are Following the Users Plan
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {isOptionOneSelected && (
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleSelection}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <Link to="signup-org">
                <TouchableOpacity style={styles.signupButton}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}

          {isOptionTwoSelected && (
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleSelection}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <Link to="signup-user">
                <TouchableOpacity style={styles.signupButton}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        </View>
      </View>
    </>
  );
};
};

export default About;
