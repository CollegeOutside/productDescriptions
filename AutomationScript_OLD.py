html = ""

desc = input("Please input the product description: ")
html+="<font size=\"2\" face=\"sans-serif\">"
html+=desc

print("Please input the specs of the product, seperated by line breaks. Press enter again when finished.")
html += "<br><br><b>Technical Specifications:</b><ul>"

# add before first colon bold
while True:
    spec = input()
    if not spec:
        break
    else:
        html+="<li>"+spec+"</li>"
html+="</ul>"

print("Please input any other features, seperated by line breaks.\nPress enter immediately if no additional features.")
hasOtherFeatures = False  
while True:
    feature = input()
    if not feature:
        break
    else:
        if not hasOtherFeatures:
            html+="<b>Other Features:</b><ul>"
            hasOtherFeatures = True
        html+="<li>"+feature+"</li>"
    
if hasOtherFeatures:
    html+="</ul>"

html+="</font>"
print("Here is your HTML-formatted description, just copy and paste it into your product import spreadsheet or Nexternal!")
print(html)