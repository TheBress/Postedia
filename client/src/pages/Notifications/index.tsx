import { Box } from "@chakra-ui/react";
import { Ad } from "../../components/Ad";
import { Notification } from "../../components/Notification";
import { Request } from "../../components/Notification/request";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { PageContainer } from "../../components/Styled/Containers/Page";
import { Navbar } from "../../components/Styled/Navbar";
import { NotificationRequestText } from "../../components/Styled/Texts/NotificationRequest";
import { useConnect } from "./connect";

export const Notifications = () => {
  const { notifications, requestsReceived } = useConnect();

  return (
    <>
      <Navbar />
      <GeneralContainer>
        <PageContainer text="Your notifications and requests" />

        <Box background="white.200" m="10" p="5" borderRadius="5px">
          <Box>
            <NotificationRequestText
              text="Notification"
              number={notifications.length}
            />

            {notifications.length
              ? notifications.map((notification) => (
                  <Notification notification={notification} />
                ))
              : "No notifications yet"}
          </Box>

          <Box pt="5">
            <NotificationRequestText
              text="Request"
              number={requestsReceived.length}
            />

            {requestsReceived.length
              ? requestsReceived.map((request) => <Request request={request} />)
              : "No requests yet"}
          </Box>
        </Box>

        <Ad />
      </GeneralContainer>
    </>
  );
};
