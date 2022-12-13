import React from 'react'
import { Box, Grid, HStack, VStack } from '@chakra-ui/react'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminInfoCards from '../../../components/admin/home/Admin.infoCards'
import RevenueBarChart from '../../../components/admin/home/charts/RevenueBarChart'
import UsersBarChart from '../../../components/admin/home/charts/UsersBarChart'
import dbConnect from '../../../utils/db.Connect'
import { PurchasedItems } from '../../../models/purchasedItems.model'
import { getDaywiseSaleData } from '../../../assets/chartData'
import { wrapper } from '../../../redux/store'
import { getCurrentTime } from '../../../assets/chartData'
import { getRequiredTime } from '../../../assets/chartData'
import { getRevenueOfGivenYear } from '../../../assets/chartData'

const AdminHome = ({
  totalSaleAndQuantity,
  currentYearRevenue,
  lastYearRevenue,
}) => {
  // console.log(currentMonthSaleProductsList)
  return (
    <HStack w="full" spacing={0} overflow="hidden" pb="20px">
      <Box w="18%" display={{ base: 'none', lg: 'flex' }}>
        <AdminSidebar location={'Admin__home'} />
      </Box>
      <VStack w={{ base: 'full', lg: '82%' }} bg="whiteAlpha.800" spacing={8}>
        {/* Admin navbar show in small screens */}
        <AdminNavbar />
        {/* Info cards  */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(2,1fr)' }}
          gap="24px"
          w="90%"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          {new Array(4).fill(0).map((ele, ind) => (
            <AdminInfoCards
              currentYearData={currentYearRevenue}
              lastYearData={lastYearRevenue}
              title={`Total Year's revenue`}
              key={new Date().getMilliseconds + ind}
            />
          ))}
        </Grid>
        {/* Chart */}
        <VStack
          w="full"
          justify={'center'}
          style={{ marginTop: '30px' }}
          spacing={10}
        >
          <RevenueBarChart data={totalSaleAndQuantity} />
          <UsersBarChart />
        </VStack>
      </VStack>
    </HStack>
  )
}

export default AdminHome

AdminHome.getLayout = function PageLayout(page) {
  return <>{page}</>
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  //can dispatch reducer here as well now
  dbConnect()
  let purchasedItems = await PurchasedItems.find().populate(['user', 'product'])
  purchasedItems = JSON.parse(JSON.stringify(purchasedItems))

  //total Sale data for Revenue Bar chart
  let totalSaleAndQuantity = getDaywiseSaleData(purchasedItems)

  //Revenue related Info-card data
  let currentYearRevenue = getRevenueOfGivenYear(
    purchasedItems,
    getCurrentTime().currYear,
  )
  let lastYearRevenue = getRevenueOfGivenYear(
    purchasedItems,
    getCurrentTime().currYear - 1,
  )

  //Users currentYear and lastYear count

  //total User related data from UsersBar UsersBarChart

  return {
    props: {
      totalSaleAndQuantity,
      currentYearRevenue,
      lastYearRevenue,
    },
    revalidate: 3600,
  }
})
