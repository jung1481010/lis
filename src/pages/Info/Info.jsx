import React from 'react';
import logo from '../../assets/logo.svg';
import pic1 from '../../assets/pic1.svg';
import './Info.css';
const Info = () => {
  return (
    <div>
      <h1 className="company-header">
        <img alt="logo" src={logo} />
        鑫享科技
      </h1>
      <div className="company-info">
        <img src={pic1} alt="" />
        <p>
          鑫享科技致力於全球貨運代理系統。我們的客戶遍佈美國、歐洲和亞洲。我們擁有深厚貨代的操作和會計領域知識，維運全球化複雜貨運代理系統，靈活的提供系統功能，如報價、訂艙、裝運、拼箱、計費、利潤分成、報關、報表和系統整合。我們整合各種技術，成功克服各種物流業務的挑戰，以提升客戶滿意度。我們的目標始終是與客戶一起成長，統整異質系統，成功處理船舶艙位問題、即時跟蹤貨況和整合報關資料。我們的服務不僅在於ERP系統，同時提供顧問諮詢、系統開發、數據分析、基礎設施和資訊安全的整體
          IT 解決方案。
        </p>
      </div>
    </div>
  );
};

export default Info;
