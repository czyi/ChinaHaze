import bs4
from bs4 import BeautifulSoup
import requests

#2013
page = requests.get('http://www.greenpeace.org/china/zh/news/releases/climate-energy/2014/01/PM25-ranking/')

soup = BeautifulSoup(page.content, 'html5lib')
#print(soup.prettify())

tbody_tags = soup.find_all("tbody")

data_dict = {}
for line in tbody_tags[0] :
	if(type(line)==bs4.element.Tag) :
		#print line

		data = line.find_all("td")
		# print data[1].p.string.strip()
		# print data[2].p.string.strip()
		# print data[3].p.string.strip()

		city = data[1].p.string.strip()
		print city

		prov = data[2].p.string.strip()
		print prov

		pm = data[3].p.string.strip()
		print pm

 		data_dict[city] = (pm, prov);

output=""
for key, value in data_dict.items():
   output += '{"city":"'+key+'",' + '"pm2.5":"'+value[0]+'",' + '"province":"'+value[1]+'"},'

print output









