import { getAllLocations } from '../../models/mavel-snap/location';
import { MarvelSnapPageLayout } from './index'
import type { MS_Location } from '@prisma/client';

const Locations = ({ locations }: { locations: MS_Location[] }) => {
  return (
    <div>{JSON.stringify(locations)}</div>
  )
}

Locations.getLayout = MarvelSnapPageLayout;

export default Locations

export async function getServerSideProps() {
  // Fetch data from external API
  const locations = await getAllLocations()

  // Pass data to the page via props
  return { props: { locations } }
}