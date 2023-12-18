"use client"

import Masonry from "react-masonry-css";
import InfoAction from "./InfoAction";
import { Info as PrismaInfo } from "@prisma/client";
import Info from "../ui/custom/Info";
import "@/app/react-massonry.css"

const InfoList = ({allInfo}: {allInfo: PrismaInfo[]}) => {
    return ( 
        <>
        <div>
          <InfoAction />
        </div>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {allInfo.length > 0 ? (
            allInfo.map((info) => (
              <div key={info.id}>
                <Info info={info} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              {"You don't have any Information yet. Why don't you create one?"}
            </div>
          )}
  
        </Masonry>
      </>
     );
}
 
export default InfoList;