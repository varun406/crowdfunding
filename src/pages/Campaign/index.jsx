import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { BottomWrap, Container, Wrapper } from "../../styles/Campaign/Main";
import Header from "../../components/Header";
import Fund from "../../views/Campaign/Fund";
import CampaignDetail from "../../views/Campaign/CampaignDetail";
import { useParams } from "react-router-dom";

const Campaign = () => {
  const { address, no } = useParams();
  const { setLoading, contract, currentAddress } = useContext(DataContext);
  const [campaign, setCampaign] = useState();

  useEffect(() => {
    const getCampaign = async () => {
      setLoading(true);

      const Campaign = await contract?.methods?.getCampaign(address)?.call();

      setCampaign(Campaign[no]);

      setLoading(false);
    };
    getCampaign();
  }, [address, contract?.methods, currentAddress, no, setLoading]);
  return (
    <Container>
      <Wrapper>
        <Header />
        {campaign && (
          <BottomWrap>
            <CampaignDetail data={campaign} />
            <Fund
              walletAddress={campaign?.walletAddress}
              creator={campaign?.creator}
            />
          </BottomWrap>
        )}
      </Wrapper>
    </Container>
  );
};

export default Campaign;
