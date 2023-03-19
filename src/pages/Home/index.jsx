import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { Container, Wrapper } from "../../styles/Home/Main";
import Header from "../../components/Header";
import CampaignsSection from "../../views/Home/CampaignsSection";

const Home = () => {
  const { setLoading, contract, currentAddress } = useContext(DataContext);
  const [campaignList, setCampaignList] = useState();

  useEffect(() => {
    const getCampaigns = async () => {
      setLoading(true);
      const AllCampaigns = await contract?.methods?.getAllCampaigns().call();
      // const getDonators = await contract.methods.getDonators().call();
      setCampaignList(AllCampaigns);
      setLoading(false);
    };
    getCampaigns();
  }, [currentAddress]);

  console.log(campaignList);

  return (
    <Container>
      <Wrapper>
        <Header />
        <CampaignsSection campaignList={campaignList} />
      </Wrapper>
    </Container>
  );
};

export default Home;
