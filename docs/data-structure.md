## Algosearch data structure
The following is the current schema for records stored in `dev_pages` index:

meta            := list<map(key, value)>
access_control  := list<map(string, bool)>  # [accepted keys; <is_published|is_abtesting|is_restricted>]
abtesting       := list<map(string, int)>   # used to define vue-a2b slot weights
route           := <string>                 # frendly url for vue-route
body            := <string>

Example record:
```
{
  "meta": [
    {
      "key": "title",
      "value": "Site Name - contact us"
    }
  ],
  "access_control": [
    {
      "is_published": true,
      "is_abtesting": true,
      "is_restricted": false
    }
  ],
  "abtesting": [
    {
      "slot_a": 100,
      "slot_b": 0
    }
  ],
  "route": "/contact",
  "body": "Lorum ipsum @ linkedin",
  "objectID": "c27fe5a408790_dashboard_generated_id"
}
```
