ironbane-router
===============
The router takes care of the forwarding between the dev and play domain on the server

@remind: the router runs on port 8080 as unprivileged user
to forward this to port 80 and keep it all secure use

iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080

Also drop traffic that goes to the ironbane services directly

* iptables -i eth0 -A INPUT -p tcp --dport 3000 -j DROP
* iptables -i eth0 -A INPUT -p tcp --dport 3100 -j DROP


Note: Don't drop the router on port 8080!!!


seems to work
