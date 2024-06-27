import React from "react";

const Company = () => {
  return (
    <>
      <div className="left-[100px] ml-[88px] mt-6 mb-5 w-[736px] h-[271px] gap-2 flex flex-col">
        <div className="w-[148px] h-[60px] pt-[10px] pr-[10px] pb-[7px] pl-0 gap-[10px] flex">
          <div className="w-[138px] h-[40px] gap-3 flex items-center justify-center">
            <img
              className="w-[40px] h-[40px] rounded-[4px]"
              src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
            />

            <div className="w-[86px] h-[27px] font-500 text-[16px] leading-[27px] text-[rgba(79,79,79,1)]">
              Atlassian
            </div>
          </div>
        </div>

        <div className="w-[736px] h-[195px] flex">
          <div className="gap-5 flex flex-col h-max">
            <div className="w-[344px] h-[49px] flex flex-col">
              <p className=" h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
                Comapny size
              </p>

              <p className="w-[477px] h-[22px] font-500 text-[14px] leading-[21.6px] text-[rgba(61,61,61,1)]">
                1k - 2k Employees
              </p>
            </div>

            <div className="w-[344px] h-[49px] flex flex-col">
              <p className="w-[44px] h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
                Sector
              </p>

              <p className=" h-[22px] font-500 text-[14px] leading-[21.6px] text-[rgb(61,61,61,1)]">
                Information, Technology, Infrastructure
              </p>
            </div>

            <div className="w-[344px] h-[49px] flex flex-col">
              <div className="w-max h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgb(110,109,109,1)]">
                Founded IN
              </div>

              <div className="w-max h-[22px] font-500 text-[14px] leading-[21.6px] text-[rgba(61,61,61,1)]">
                2019
              </div>
            </div>
          </div>

          <div className="gap-5 flex flex-col h-max">
            <div className="w-[344px] h-[49px] flex flex-col">
              <p className=" h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
                Type
              </p>

              <p className="w-[477px] h-[22px] font-500 text-[16px] leading-[21.6px] text-[rgba(61,61,61,1)]">
                Private
              </p>
            </div>

            <div className="w-[344px] h-[49px] flex flex-col">
              <p className="w-[44px] h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
                Funding
              </p>

              <p className="w-max h-[22px] font-500 text-[16px] leading-[21.6px] text-[rgb(61,61,61,1)]">
                Bootstrapped
              </p>
            </div>

            <div className="w-[344px] h-[49px] flex flex-col">
              <div className="w-max h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgb(110,109,109,1)]">
                Founded By
              </div>

              <div className="w-max h-[22px] font-500 text-[16px] leading-[21.6px] text-[rgba(61,61,61,1)]">
                Scott Farquhar, Mike Cannone-Brookes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
