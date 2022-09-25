import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const CryptoSkeletonComponent = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginVertical={5} marginHorizontal={10}>
        <SkeletonPlaceholder.Item width={30} height={30} borderRadius={50} />
          <SkeletonPlaceholder.Item width={295} height={60} marginLeft={6} borderRadius={4} />
      
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CryptoSkeletonComponent