#!/bin/bash


total_space=0
used_space=0

# Iterujemy przez listę woluminów i wyświetlamy ich nazwy oraz
# procentowe zużycie przestrzeni dyskowej.
docker volume ls --format "{{.Name}}" | while read -r volume_name
do
    volume_info=$(docker volume inspect "$volume_name")
    volume_space=$(echo "$volume_info" | awk -F '[,}]' '/UsageData/ {print $2}')
    volume_size=$(echo "$volume_info" | awk -F '[,}]' '/DriverConfig/ {print $2}')
    volume_space_percent=$(echo "scale=2; $volume_space / $volume_size * 100" | bc -l)
    total_space=$(echo "scale=2; $total_space + $volume_size" | bc -l)
    used_space=$(echo "scale=2; $used_space + $volume_space" | bc -l)
    echo "$volume_name: $volume_space_percent%"
done

# Obliczamy procentowe zużycie przestrzeni dyskowej dla wszystkich woluminów.
total_space_percent=$(echo "scale=2; $used_space / $total_space * 100" | bc -l)
echo "Total used space: $total_space_percent%"
