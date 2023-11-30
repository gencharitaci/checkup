<script>
  import Card from './lib/Card.svelte'

  </script>

  <Card
    title="Node API - mcmap.org"
    description="Testing point intersection."
    api="https://api.mcmap.org/v1/intersect_point/voting_precincts/1440901,479406,2264?geom_column=the_geom&columns=precno&distance=0&limit=10"
  />
  <Card
    title="PHP API - maps.co"
    description="Testing point intersection."
    api="https://mcmap.org/rest/v2/ws_geo_pointoverlay.php?table=voting_precincts&srid=2264&x=1440901&y=479406&fields=precno&_=1579789240964"
  />
  <Card
    title="Node API 1 - maps.co"
    description="Testing point intersection."
    api="https://mcmap.org/api/intersect_point/v1/voting_precincts/1440901,479406/2264?geom_column=the_geom&columns=precno&distance=0&limit=10"
  />
  <Card
    title="Node API 2 - maps.co"
    description="Testing point intersection."
    api="https://mcmap.org/api2/v1/intersect_point/voting_precincts/1440901,479406,2264?geom_column=the_geom&columns=precno&distance=0&limit=10"
  />
  <Card
    title="GeoServer"
    description="Testing WMS image call."
    img="https://mcmap.org/geoserver/postgis/wms?service=WMS&version=1.1.0&request=GetMap&layers=postgis:jurisdictions&styles=&bbox=1376613.94375,451640.978125,1544634.68125,657077.459375&width=180&height=220&srs=EPSG:2264&format=image%2Fpng%3B+mode%3D8bit"
  />
