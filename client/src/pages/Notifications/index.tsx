import { Box } from "@chakra-ui/react";
import { Ad } from "../../components/Ad";
import { Notification } from "../../components/Notification";
import { Request } from "../../components/Notification/request";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { PageContainer } from "../../components/Styled/Containers/Page";
import { ToastContainer } from "../../components/Styled/Containers/Toast";
import { Navbar } from "../../components/Styled/Navbar";
import { NotificationRequestText } from "../../components/Styled/Texts/NotificationRequest";
import { getNotificationsMaxHeight } from "../../functions";
import { useConnect } from "./connect";

export const Notifications = () => {
  const { notifications, requestsReceived, id, notReadNotifications } =
    useConnect();

  return (
    <>
      <Navbar />
      <GeneralContainer>
        <PageContainer text="Your notifications and requests" />

        <Box
          background="white.200"
          m="10"
          p="5"
          borderRadius="5px"
          maxHeight={getNotificationsMaxHeight()}
        >
          <Box>
            <NotificationRequestText
              text="Notifications"
              number={notReadNotifications.length}
            />

            {notifications.length
              ? notifications.map((notification, index) => (
                  <Notification notification={notification} key={index} />
                ))
              : "No notifications yet"}
          </Box>

          <Box pt="5">
            <NotificationRequestText
              text="Received requests"
              number={requestsReceived.length}
            />

            {requestsReceived.length
              ? requestsReceived.map((request, index) => (
                  <Request request={request} key={index} />
                ))
              : "No requests received yet"}
          </Box>
        </Box>

        <Ad userId={id} />
        <ToastContainer />
      </GeneralContainer>
    </>
  );
};
