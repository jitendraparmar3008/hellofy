import RateCardData from "./CostData/website-rate-card.json";
import CommonModal from "../UI/CommonModal";
import SearchBar from "../Common/SearchBar";
import { useEffect, useState } from "react";

const CostPerConversationModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const websiteCardData = RateCardData?.conversationRates;
  //console.log("websiteCardData", websiteCardData);
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  const filteredData = websiteCardData.filter((rate) =>
    `${rate.country} ${rate.callingCode}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      className="lg:w-[831px] w-[94%] lg:py-12 lg:px-14  p-6 overflow-y-auto"
    >
      <div className="w-full flex justify-between items-center mb-5">
        <h3 className="lg:text-2xl text-lg font-semibold text-dark mb-5">
          Cost per conversation
        </h3>
        <SearchBar
          value={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="relative overflow-auto shadow-md rounded-xl max-h-[584px]">
        <table className="w-full text-left shadow-common_shadow rounded-xl overflow-auto table-auto">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="2xl:text-sm text-xs px-4 py-3 text-dark bg-azure rounded-tl-2xl pl-9 flex items-center">
                <p>Country Name</p>
              </th>
              <th className="2xl:text-sm text-xs px-4 py-3 text-dark bg-azure">
                Country Code
              </th>
              <th className="2xl:text-sm text-xs px-4 py-3 text-dark bg-azure">
                Marketing
              </th>
              <th className="2xl:text-sm text-xs px-4 py-3 text-dark bg-azure">
                Utility
              </th>
              <th className="2xl:text-sm text-xs px-4 py-3 text-dark bg-azure">
                <p>Authentication</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((rate, index) => {
                return (
                  <tr key={index} className="border-b hover:bg-slate-200/40">
                    <td className="2xl:text-sm text-xs px-4 py-3 text-dark pl-9">
                      {rate?.country || "-"}
                    </td>
                    <td className="2xl:text-sm text-xs px-4 py-3 text-dark">
                      {rate?.callingCode || "-"}
                    </td>
                    <td className="2xl:text-sm text-xs px-4 py-3 text-dark">
                      {rate?.marketing.toFixed(4) || "-"}
                    </td>
                    <td className="2xl:text-sm text-xs px-4 py-3 text-dark">
                      {rate?.utility.toFixed(4) || "-"}
                    </td>
                    <td className="2xl:text-sm text-xs px-4 py-3 text-dark capitalize">
                      {rate?.authentication.toFixed(4) || "-"}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-3 text-sm text-dark">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </CommonModal>
  );
};

export default CostPerConversationModal;
