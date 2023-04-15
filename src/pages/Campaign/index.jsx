import React, { useContext, useEffect, useState } from "react";
import { DataContext, contract } from "../../App";
import {
  BottomWrap,
  Container,
  PaymentSection,
  Wrapper,
} from "../../styles/Campaign/Main";
import Header from "../../components/Header";
import Fund from "../../views/Campaign/Fund";
import CampaignDetail from "../../views/Campaign/CampaignDetail";
import { useParams } from "react-router-dom";
import { TipButton } from "../../styles/Campaign/Fund";
import TipCard from "../../components/TipCard";
import Auth from "../../components/Auth";
import { CampaignContext } from "../../context/CampaignContext";
import { getSingleCampaign } from "../../api/services/Campaign";
import { getPDF } from "../../api/services/User";
import { AuthContext } from "../../context/AuthContext";

const Campaign = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { setLoading, setLoginOpen, setTipOpen, openTip } =
    useContext(DataContext);
  const { currentAddress } = useContext(CampaignContext);
  const [campaign, setCampaign] = useState();

  useEffect(() => {
    console.log(id);
    const getCampaign = async () => {
      setLoading(true);

      const singleCampaign = await getSingleCampaign(id);
      setLoading(false);
      setCampaign(singleCampaign[0]);
    };

    getCampaign();
  }, [id]);

  console.log(campaign);

  return (
    <Container>
      <Wrapper>
        <Header />
        {campaign && (
          <BottomWrap>
            <CampaignDetail data={campaign} />
            <PaymentSection>
              <Fund
                walletAddress={campaign?.walletAddress}
                charityName={campaign?.charityName}
                amountRaised={campaign?.amount}
                targetAmount={campaign?.target}
                charityTitle={campaign?.title}
                isCampaignEnded={campaign?.isEnded}
              />

              {campaign?.walletAddress?.toLowerCase() === currentAddress &&
                campaign?.isEnded && (
                  <TipButton onClick={() => setTipOpen(true)}>
                    Give Tip
                  </TipButton>
                )}
              {openTip && <TipCard />}
            </PaymentSection>
          </BottomWrap>
        )}
      </Wrapper>
    </Container>
  );
};

export default Campaign;
